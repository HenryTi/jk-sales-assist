//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqSheet, UqBook, UqQuery, UqHistory } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/OrderDraft ========
//===============================

export interface TuidCurrency {
}

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	roles: number;
	poke: number;
}

export interface TuidInvoiceType {
}

export interface TuidInvoiceInfo {
}

export interface TuidCoupon {
}

export interface TuidCustomer {
}

export interface TuidOrganization {
}

export interface TuidContact {
}

export interface TuidSalesRegion {
}

export interface Tuid$sheet {
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface TuidSeller {
	name: string;
}

export interface TuidBuyerAccount {
}

export interface TuidProductX {
	brand: number;
}

export interface TuidBrand {
}

export interface TuidWebUser {
}

export interface ParamSendOutOrderDraft {
	orderDraft: number;
}
interface ResultSendOutOrderDraft {
}

export interface SheetOrderDraft {
	webUser: number;
	organization: number;
	buyerAccount: number;
	shippingContact: number;
	invoiceContact: number;
	invoiceType: number;
	invoiceInfo: number;
	amount: number;
	currency: number;
	freightFee: number;
	freightFeeRemitted: number;
	coupon: number;
	couponOffsetAmount: number;
	couponRemitted: number;
	point: number;
	comments: string;
	seller: number;
	salesRegion: number;
	orderMaker: number;
	orderItems: {
		product: number;
		pack: number;
		price: number;
		quantity: number;
		subAmount: number;
		refrigerationFee: number;
		freezingFee: number;
		packingFee: number;
		proxyFreightFee: number;
	}[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
	$id: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamGetOrderDraftByMaker {
	orderMaker: number;
	status: number;
}
interface ReturnGetOrderDraftByMaker$page {
	id: number;
	date: any;
	orderDraft: number;
	$id: number;
}
interface ResultGetOrderDraftByMaker {
	$page: ReturnGetOrderDraftByMaker$page[];
}

export interface ParamGetSendOutHistory {
	orderDraft: number;
}
interface ReturnGetSendOutHistoryRet {
	id: number;
	date: any;
	$id: number;
}
interface ResultGetSendOutHistory {
	ret: ReturnGetSendOutHistoryRet[];
}

export interface ParamCart {
	staff: number;
	user: number;
	product: number;
}
interface ReturnCart$page {
	pack: number;
	price: number;
	currency: number;
	quantity: number;
	date: any;
}
interface ResultCart {
	$page: ReturnCart$page[];
}

export interface ParamOrderDraftHistory {
	orderDraft: number;
	webUser: number;
	organization: number;
	buyerAccount: number;
	shippingContact: number;
	invoiceContact: number;
	invoiceType: number;
	invoiceInfo: number;
	amount: number;
	currency: number;
	freightFee: number;
	freightFeeRemitted: number;
	coupon: number;
	couponOffsetAmount: number;
	couponRemitted: number;
	point: number;
	comments: string;
	seller: number;
	salesRegion: number;
	orderMaker: number;
}
interface ReturnOrderDraftHistory$page {
	date: any;
	orderDraft: number;
	webUser: number;
	organization: number;
	buyerAccount: number;
	shippingContact: number;
	invoiceContact: number;
	invoiceType: number;
	invoiceInfo: number;
	amount: number;
	currency: number;
	freightFee: number;
	freightFeeRemitted: number;
	coupon: number;
	couponOffsetAmount: number;
	couponRemitted: number;
	point: number;
	comments: string;
	seller: number;
	salesRegion: number;
	orderMaker: number;
}
interface ResultOrderDraftHistory {
	$page: ReturnOrderDraftHistory$page[];
}

export interface ParamOrderDraftItemHistory {
	product: number;
	pack: number;
	price: number;
	quantity: number;
	amount: number;
	refrigerationFee: number;
	freezingFee: number;
	packingFee: number;
	proxyFreightFee: number;
	currency: number;
}
interface ReturnOrderDraftItemHistory$page {
	date: any;
	product: number;
	pack: number;
	price: number;
	quantity: number;
	amount: number;
	refrigerationFee: number;
	freezingFee: number;
	packingFee: number;
	proxyFreightFee: number;
	currency: number;
	type: number;
	sheet: number;
	row: number;
	user: number;
}
interface ResultOrderDraftItemHistory {
	$page: ReturnOrderDraftItemHistory$page[];
}

export interface ParamOrderDraftAction {
	id: number;
	action: number;
	operator: number;
}
interface ReturnOrderDraftAction$page {
	date: any;
	id: number;
	action: number;
	operator: number;
}
interface ResultOrderDraftAction {
	$page: ReturnOrderDraftAction$page[];
}

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	Currency: UqTuid<TuidCurrency>;
	$user: UqTuid<Tuid$user>;
	InvoiceType: UqTuid<TuidInvoiceType>;
	InvoiceInfo: UqTuid<TuidInvoiceInfo>;
	Coupon: UqTuid<TuidCoupon>;
	Customer: UqTuid<TuidCustomer>;
	Organization: UqTuid<TuidOrganization>;
	Contact: UqTuid<TuidContact>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	$sheet: UqTuid<Tuid$sheet>;
	Seller: UqTuid<TuidSeller>;
	BuyerAccount: UqTuid<TuidBuyerAccount>;
	ProductX: UqTuid<TuidProductX>;
	Brand: UqTuid<TuidBrand>;
	WebUser: UqTuid<TuidWebUser>;
	SendOutOrderDraft: UqAction<ParamSendOutOrderDraft, ResultSendOutOrderDraft>;
	OrderDraft: UqSheet<SheetOrderDraft, any>;
	Cart: UqBook<ParamCart, ResultCart>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetOrderDraftByMaker: UqQuery<ParamGetOrderDraftByMaker, ResultGetOrderDraftByMaker>;
	GetSendOutHistory: UqQuery<ParamGetSendOutHistory, ResultGetSendOutHistory>;
	OrderDraftHistory: UqHistory<ParamOrderDraftHistory, ResultOrderDraftHistory>;
	OrderDraftItemHistory: UqHistory<ParamOrderDraftItemHistory, ResultOrderDraftItemHistory>;
	OrderDraftAction: UqHistory<ParamOrderDraftAction, ResultOrderDraftAction>;
}
