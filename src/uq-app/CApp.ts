import { CHome } from "../home";
import { CMe } from "../me";
import { CBug } from "./bug";
import { CUqApp } from "./CBase";
import { res } from "./res";
import { VMain } from "./VMain";
import { CTester } from "./test-uqui";
import { setUI } from "./uqs";
import { CCustomer } from "../customer/CCustomer";
import { CProduct } from "../product";
import { CTeam } from "../team/CTeam";
import { CInnerTeam } from "../innerteam/CInnerTeam";
import { CStart } from "../start";
import { CMessage } from "../message/CMessage";
import { CCustomerUnit } from "../customerunit/CCustomerUnit";
import { CCoupon } from "../coupon/CCoupon";
import { CInnerCustomer } from "../innercustomer/CInnerCustomer";
import { CBalance } from "../achievement/CBalance";
import { CPost } from "../post/CPost";
import { CWebUser } from "../webuser/CWebUser";
import { COrder } from "../order/COrder";
import { CCart } from "../cart/CCart";
import { Cart } from "../cart/Cart";
import { ProductCart } from "../model/productcart";
import { CVIPCardType } from "../vipCardType/CVIPCardType";
import { WebUser } from 'CurrentUser';
import { UserCache } from "tonva-react";
import { GLOABLE } from "./appConfig";

const gaps = [10, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 15, 15, 15, 30, 30, 60];

export class CApp extends CUqApp {

	currentSalesRegion: any;
	currentLanguage: any;
	currentUser: WebUser;

	cart: Cart;
	cHome: CHome;
	cBug: CBug;
	cMe: CMe;
	cUI: CTester;

	cCustomer: CCustomer;
	cProduct: CProduct;
	cTeam: CTeam;
	cInnerTeam: CInnerTeam;
	cStart: CStart;
	cMessage: CMessage;
	cCustomerUnit: CCustomerUnit;
	cCoupon: CCoupon;
	cInnerCustomer: CInnerCustomer;
	cBalance: CBalance;
	cPost: CPost;
	cWebUser: CWebUser;
	cOrder: COrder;
	cCart: CCart;
	cVIPCardType: CVIPCardType;

	currentMyCustomer: any;  // 
	productCart: ProductCart;

	private setUser() {
		this.currentUser = new WebUser(this.uqs); //this.cUqWebUser, this.cUqCustomer);
		if (this.isLogined) {
			this.currentUser.setUser(this.user);
		}
	}

	protected async internalStart(isUserLogin: boolean) {
		this.setRes(res);
		setUI(this.uqs);
		this.cHome = this.newC(CHome);
		this.cBug = this.newC(CBug);
		this.cMe = this.newC(CMe);
		this.cUI = this.newC(CTester) as CTester;
		this.cHome.load();

		let { SALESREGION_CN, CHINESE } = GLOABLE;
		this.currentSalesRegion = await this.uqs.JkseCommon.SalesRegion.load(
			SALESREGION_CN
		);
		this.currentLanguage = await this.uqs.JkseCommon.Language.load(
			CHINESE
		);
		this.setUser();

		let userLoader = async (userId: number): Promise<any> => {
			let { JkseSalesTask, JkseHr } = this.uqs;
			let employeeMap = await JkseSalesTask.WebUserEmployeeMap.obj({ webuser: userId });
			if (employeeMap) {
				let model = await JkseHr.Employee.load(employeeMap.employee);
				return model;
			}
		}
		this.cart = new Cart(this);
		this.userCache = new UserCache(userLoader);

		this.productCart = new ProductCart();

		this.cCustomer = this.newC(CCustomer);
		this.cProduct = this.newC(CProduct);
		this.cMe = this.newC(CMe);
		this.cTeam = this.newC(CTeam);
		this.cInnerTeam = this.newC(CInnerTeam);
		this.cStart = this.newC(CStart);
		this.cMessage = this.newC(CMessage);
		this.cCustomerUnit = this.newC(CCustomerUnit);
		this.cCoupon = this.newC(CCoupon);
		this.cInnerCustomer = this.newC(CInnerCustomer);
		this.cBalance = this.newC(CBalance);
		this.cPost = this.newC(CPost);
		this.cVIPCardType = this.newC(CVIPCardType);
		this.cHome = this.newC(CHome);
		this.cWebUser = this.newC(CWebUser);
		this.cOrder = this.newC(COrder);
		this.cCart = this.newC(CCart);
		this.openVPage(VMain, undefined, this.dispose);
		// 加上下面一句，可以实现主动页面刷新
		// this.timer = setInterval(this.callTick, 1000);
		// uq 里面加入这一句，会让相应的$Poked查询返回poke=1：
		// TUID [$User] ID (member) SET poke=1;
	}

	private timer: any;
	protected onDispose() {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	private tick = 0;
	private gapIndex = 0;
	private callTick = async () => {
		try {
			if (!this.user) return;
			++this.tick;
			if (this.tick < gaps[this.gapIndex]) return;
			//console.error('tick ', new Date());
			this.tick = 0;
			if (this.gapIndex < gaps.length - 1) ++this.gapIndex;
			let ret = await this.uqs.BzHelloTonva.$poked.query(undefined, false);
			let v = ret.ret[0];
			if (v === undefined) return;
			if (!v.poke) return;
			this.gapIndex = 1;

			// 数据服务器提醒客户端刷新，下面代码重新调入的数据
			//this.cHome.refresh();
		}
		catch {
		}
	}

	async showMain() {
		let hasQualification: boolean = false;
		let { JkseSalesTask } = this.uqs;
		if (GLOABLE.IsAssistApp) {
			let result = await JkseSalesTask.WebUserEmployeeMap.obj({ webuser: this.user.id });
			if (result !== undefined) {
				hasQualification = true;
			}
		} else {
			let result = await JkseSalesTask.SearchPosition.obj({ position: undefined });
			if (result !== undefined) {
				hasQualification = true;
			}
		}

		if (hasQualification) {
			this.openVPage(VMain);
		} else {
			this.cStart.start();
		}
	}

	private userCache: UserCache<any>;

	renderUser(userId: number) {
		let val = this.userCache.getValue(userId);
		switch (typeof val) {
			case 'undefined':
			case 'number':
				return userId;
		};
		return val.name;
	}

	useUser(userId: number) {
		this.userCache.use(userId);
	}
}
