import { observable, autorun, IReactionDisposer } from 'mobx';
import { Action, Query, TuidDiv, BoxId, Tuid } from "tonva-react";
import { CApp } from 'uq-app';
import { PackRow } from '../product/product';

export interface CartItem2 {
    product: BoxId;
    packs: CartPackRow[];
    // $isSelected?: boolean;
    $isDeleted?: boolean;
    createdate: number;
}

export interface CartPackRow extends PackRow {
    /**
     * 销售成交价（在购物车中是目录价或市场活动价或协议价的最小值），订单中还会经过券的计算
     */
    price: number;

    /**
     * 订单中的初始销售成交价（订单中应用折扣券之前的价格）
     */
    priceInit?: number;
    /**
     * 订单中目录价
     */
    retail: number;
    currency: any;
}

export class Cart {
    cApp: CApp;

    // private cartStore: CartStore;
    private disposer: IReactionDisposer;

    @observable data: any = {
        list: observable<CartItem2>([]),
    };
    cartItems: CartItem2[];
    count = observable.box<number>(0);
    amount = observable.box<number>(0);
    editButton = observable.box<boolean>(false);
    constructor(cApp: CApp) {
        this.cApp = cApp;
        this.cartItems = this.data.list;
        this.disposer = autorun(this.calcSum);
    }

    dispose() {
        this.disposer();
    }

    protected calcSum = () => {
        let count = 0, amount = 0;
        for (let cp of this.cartItems) {
            let { $isDeleted, packs } = cp;
            if ($isDeleted === true) continue;
            for (let pi of packs) {
                let { price, quantity } = pi;
                count += quantity;
                if (price === Number.NaN || quantity === Number.NaN) continue;
                amount += quantity * price;
            }
        }
        this.count.set(count);
        this.amount.set(parseFloat(amount.toFixed(2)));
    }

    // async init(): Promise<void> {
    //     let { isLogined, uqs, currentSalesRegion } = this.cApp;
    //     if (isLogined)
    //         this.cartStore = new CartRemote(this.cApp);
    //     else
    //         this.cartStore = new CartLocal(this.cApp);
    //     let cartData = await this.cartStore.load();

    //     // 初始化购物车中产品的目录价
    //     let { product } = uqs;
    //     let { PriceX } = product;
    //     let promises: PromiseLike<void>[] = [];
    //     cartData.forEach((e: any) => promises.push(PriceX.obj({ product: e.product, pack: e.pack, salesRegion: currentSalesRegion })));
    //     let prices = await Promise.all(promises);
    //     for (let index = cartData.length - 1; index >= 0; index--) {
    //         let e: any = cartData[index];
    //         let priceMap: any = prices.find((v: any) => Tuid.equ(v.product, e.product)
    //             && Tuid.equ(v.pack, e.pack) && v.discountinued === 0 && v.expireDate > Date.now());
    //         if (priceMap && priceMap.retail) {
    //             e.retail = priceMap.retail;
    //         } else {
    //             cartData.splice(index, 1);
    //         }
    //     }

    //     let cartDataGrouped = groupByProduct(cartData);
    //     if (cartDataGrouped && cartDataGrouped.length > 0) {
    //         for (let i = 0; i < cartDataGrouped.length; i++) {
    //             let { product, packs, createdate } = cartDataGrouped[i];
    //             this.cartItems.push({
    //                 product: product,
    //                 packs: packs,
    //                 $isSelected: true,
    //                 $isDeleted: false,
    //                 createdate: createdate,
    //             })
    //         }
    //     }
    // }

    getQuantity(productId: number, packId: number): number {
        let cp = this.cartItems.find(v => v.$isDeleted !== true && Tuid.equ(v.product, productId));
        if (!cp) return 0;
        let cpp = cp.packs.find(v => v.pack.id === packId);
        return cpp === undefined ? 0 : cpp.quantity;
    }

    isDeleted(productId: number): boolean {
        let i = this.cartItems.findIndex(v => v.$isDeleted === true && Tuid.equ(v.product, productId));
        return i !== -1;
    }

    getSelectedItems(): CartItem2[] {
        return this.cartItems.filter(v => {
            let { $isDeleted } = v;
            return $isDeleted !== true;
        });
    }

    /**
     *
     */
    add = async (product: BoxId, pack: BoxId, quantity: number, price: number, retail: number, currency: any) => {
        let cartItemExists = this.cartItems.find((e) => Tuid.equ(e.product, product));
        if (!cartItemExists) {
            cartItemExists = {
                product: product,
                packs: [{ pack: pack, quantity: quantity, price: price, retail: retail, currency: currency }],

                $isDeleted: false,
                createdate: Date.now()
            };
            this.cartItems.push(cartItemExists);
        }
        else {
            let { $isDeleted, packs } = cartItemExists;
            if ($isDeleted === true)
                packs.splice(0);

            let packExists: CartPackRow = packs.find(e => Tuid.equ(e.pack, pack));
            if (packExists === undefined) {
                let added = false;
                for (let index = packs.length - 1; index >= 0; index--) {
                    if (packs[index].price < price) {
                        packs.splice(index + 1, 0, { pack: pack, quantity: quantity, price: price, retail: retail, currency: currency });
                        added = true;
                        break;
                    }
                }
                if (!added)
                    packs.unshift({ pack: pack, quantity: quantity, price: price, retail: retail, currency: currency })
                // packs.push();
            }
            else {
                packExists.quantity = quantity;
                packExists.price = price;
                packExists.currency = currency;
            }
            // cartItemExists.$isSelected = true;
            cartItemExists.$isDeleted = false;
            cartItemExists.createdate = Date.now();
        }

        // await this.cartStore.storeCart(product, pack, quantity, price, currency);
    }
    removeStrike = async (data: any) => {
        console.log(data);
        // data.forEach((el: CartItem2) => {
        //     el.packs.forEach(async (v: any) => {
        //         await this.cartStore.storeCart(el.product, v.pack, v.quantity, v.price, v.currency);
        //     })
        // });
    }

    /**
     *
     * @param rows
     */
    async removeFromCart(rows: [{ productId: number, packId: number }]) {
        if (rows && rows.length > 0) {
            rows.forEach(pe => {
                let cartItemIndex = this.cartItems.findIndex(e => e.product.id === pe.productId);
                if (cartItemIndex >= 0) {
                    let cartItem = this.cartItems[cartItemIndex];
                    let i = cartItem.packs.findIndex(e => e.pack.id === pe.packId)
                    if (i >= 0) {
                        cartItem.packs.splice(i, 1);
                        if (cartItem.packs.length === 0) {
                            this.cartItems.splice(cartItemIndex, 1);
                        }
                    }
                }
            })
            // this.cartStore.removeFromCart(rows);
        }
    }

}