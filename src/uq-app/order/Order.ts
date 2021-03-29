import { BoxId } from "tonva-react";
import { observable, computed } from 'mobx';
import { CartPackRow } from 'uq-app/cart/Cart';
// import { CCustomer } from 'customer/CCustomer';

export class Order {
    @observable orderItems: OrderItem[] = [];
    buyerAccount: any;
    webUser: any;
    orderMaker: any;
    @observable freightFee: number;
    @observable freightFeeRemitted: number;
    organization: BoxId;

    @observable shippingContact: BoxId;
    @observable invoiceContact: BoxId;
    @observable invoiceType: BoxId;
    @observable invoiceInfo: BoxId;
    /**
     * 总金额
     */
    @computed get amount() {
        return parseFloat((this.orderItems.reduce((pv, cv) => (pv + cv.subAmount), 0) +
            (this.freightFee ? this.freightFee : 0) +
            (this.freightFeeRemitted ? this.freightFeeRemitted : 0)).toFixed(2));
    };
    /**
     * 商品总额(未应用券的价格) -----> 已修 应用目录价计算(总额恒定)
     */
    @computed get productAmount() {
        return parseFloat(this.orderItems.reduce((pv, cv) => pv + cv.subListAmount, 0).toFixed(2));
    };
    currency: BoxId;
    @observable coupon: BoxId;
    @observable couponOffsetAmount: number;
    @observable couponRemitted: number;
    @observable point: number;
    comments: string;
    salesRegion: BoxId;
    getDataForSave() {
        let orderItems: any[] = [];
        this.orderItems.forEach(oi => {
            oi.packs.forEach(pk => {
                this.currency = pk.currency;
                orderItems.push({
                    product: oi.product.id, pack: pk.pack.id, price: pk.price, quantity: pk.quantity
                    , subAmount: pk.quantity * pk.price, retail: pk.retail
                })
            })
        });
        return {
            orderMaker: this.orderMaker,
            webUser: this.webUser.id,
            organization: this.organization.id,
            buyerAccount: this.buyerAccount && this.buyerAccount.id,
            shippingContact: this.shippingContact.id,
            invoiceContact: this.invoiceContact.id,
            invoiceType: this.invoiceType.id,
            invoiceInfo: this.invoiceInfo.id,
            amount: this.amount,
            currency: this.currency,
            freightFee: this.freightFee,
            freightFeeRemitted: this.freightFeeRemitted,
            coupon: this.coupon.id,
            couponOffsetAmount: this.couponOffsetAmount,
            couponRemitted: this.couponRemitted,
            point: this.point,
            comments: this.comments,
            orderitems: orderItems, // 前面的必须是小写的orderitems
            salesRegion: this.salesRegion,
        }
    }
}

export class OrderItem {

    product: BoxId;
    @observable packs: CartPackRow[];
    @computed get subAmount() {
        return this.packs.reduce((p, c) => {
            return p + c.price * c.quantity
        }, 0);
    }
    @computed get subListAmount() {
        return this.packs.reduce((p, c) => {
            return p + c.retail * c.quantity
        }, 0);
    }
}
