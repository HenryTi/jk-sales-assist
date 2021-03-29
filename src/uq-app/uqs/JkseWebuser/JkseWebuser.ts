//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqBook, UqQuery, UqMap, UqHistory } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/webuser ========
//===============================

export interface TuidInvoiceInfo {
	title: string;
	taxNo: string;
	address: string;
	telephone: string;
	bank: string;
	accountNo: string;
}

export interface TuidAddress {
	country: number;
	province: number;
	city: number;
	county: number;
	zip: string;
	description: string;
}

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidCounty {
	city: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidCustomer {
	name: string;
	firstName: string;
	lastName: string;
	no: string;
	gender: string;
	salutation: string;
	birthDay: any;
	createTime: any;
}

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	roles: number;
	poke: number;
}

export interface TuidWebUser {
	name: string;
	firstName: string;
	lastName: string;
	gender: string;
	salutation: string;
	organizationName: string;
	departmentName: string;
	no: number;
}

export interface TuidAuditPendingUserRefuseReason {
	description: string;
}

export interface TuidCity {
	province: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidInvoiceType {
	description: string;
}

export interface TuidBuyerAccount {
}

export interface TuidCurrency {
	name: string;
	suffix: string;
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

export interface TuidCountry {
	code: string;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidProvince {
	country: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidContact {
	name: string;
	organizationName: string;
	mobile: string;
	telephone: string;
	email: string;
	address: number;
	addressString: string;
}

export interface TuidWebUserSettingType {
	description: string;
}

export interface TuidVIPCardType {
}

export interface TuidProductX {
	brand: number;
}

export interface TuidBrand {
	name: string;
	no: string;
}

export interface TuidChemical {
}

export interface ParamAuditPendingUser {
	id: number;
	customerId: number;
}
interface ResultAuditPendingUser {
}

export interface ParamAuditPendingUserRefuse {
	id: number;
	reason: number;
	comments: string;
}
interface ResultAuditPendingUserRefuse {
}

export interface ParamRecordLogin {
	webUser: number;
	ip: string;
	app: string;
}
interface ResultRecordLogin {
}

export interface ParamSetCustomerMainWebUser {
	customer: number;
	webUser: number;
}
interface ResultSetCustomerMainWebUser {
}

export interface ParamApplyAuditUser {
	webUser: number;
}
interface ResultApplyAuditUser {
}

export interface ParamGetPendingAuditUser {
}
interface ReturnGetPendingAuditUserRet {
	webUser: number;
	$id: number;
}
interface ResultGetPendingAuditUser {
	ret: ReturnGetPendingAuditUserRet[];
}

export interface ParamSearchHavingRefuseUser {
}
interface ReturnSearchHavingRefuseUser$page {
	id: number;
	webUser: number;
	reason: number;
	comments: string;
	date: any;
	$id: number;
}
interface ResultSearchHavingRefuseUser {
	$page: ReturnSearchHavingRefuseUser$page[];
}

export interface ParamSearchHavingAuditUser {
}
interface ReturnSearchHavingAuditUser$page {
	id: number;
	webUser: number;
	customer: number;
	date: any;
	$id: number;
}
interface ResultSearchHavingAuditUser {
	$page: ReturnSearchHavingAuditUser$page[];
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

export interface ParamGetMyFavirates {
	webUser: number;
	salesRegion: number;
}
interface ReturnGetMyFavirates$page {
	seq: number;
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	chemical: number;
	CAS: string;
	purity: string;
	molecularFomula: string;
	molecularWeight: string;
	discountinued: number;
	$id: number;
}
interface ResultGetMyFavirates {
	$page: ReturnGetMyFavirates$page[];
}

export interface ParamGetMyExpiredCoupon {
	webUser: number;
}
interface ReturnGetMyExpiredCoupon$page {
	seq: number;
	id: number;
	code: number;
	types: string;
	createdate: any;
	expireddate: any;
	$id: number;
}
interface ResultGetMyExpiredCoupon {
	$page: ReturnGetMyExpiredCoupon$page[];
}

export interface ParamGetMyUsedCoupon {
	webUser: number;
}
interface ReturnGetMyUsedCoupon$page {
	seq: number;
	id: number;
	code: number;
	types: string;
	useddate: any;
	$id: number;
}
interface ResultGetMyUsedCoupon {
	$page: ReturnGetMyUsedCoupon$page[];
}

export interface ParamSearchCouponReceive {
	coupon: number;
}
interface ReturnSearchCouponReceiveRet {
	webuser: number;
	createDate: any;
	$id: number;
}
interface ResultSearchCouponReceive {
	ret: ReturnSearchCouponReceiveRet[];
}

export interface ParamGetWebUserByCustomer {
	customer: number;
}
interface ReturnGetWebUserByCustomerRet {
	id: number;
	name: string;
	firstName: string;
	lastName: string;
	organizationName: string;
	priority: number;
	$id: number;
}
interface ResultGetWebUserByCustomer {
	ret: ReturnGetWebUserByCustomerRet[];
}

export interface ParamPendingAuditWebUser {
}
interface ReturnPendingAuditWebUser$page {
	webUser: number;
}
interface ResultPendingAuditWebUser {
	$page: ReturnPendingAuditWebUser$page[];
}

export interface ParamWebUserAuditHistory {
	webUser: number;
	customer: number;
}
interface ReturnWebUserAuditHistory$page {
	date: any;
	webUser: number;
	customer: number;
	user: number;
}
interface ResultWebUserAuditHistory {
	$page: ReturnWebUserAuditHistory$page[];
}

export interface ParamWebUserAuditRefuseHistory {
	webUser: number;
	reason: number;
	comments: string;
}
interface ReturnWebUserAuditRefuseHistory$page {
	date: any;
	webUser: number;
	reason: number;
	comments: string;
	user: number;
}
interface ResultWebUserAuditRefuseHistory {
	$page: ReturnWebUserAuditRefuseHistory$page[];
}

export interface ParamLoginHistory {
	webUser: number;
	ip: string;
	app: string;
}
interface ReturnLoginHistory$page {
	date: any;
	webUser: number;
	ip: string;
	app: string;
}
interface ResultLoginHistory {
	$page: ReturnLoginHistory$page[];
}

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	InvoiceInfo: UqTuid<TuidInvoiceInfo>;
	Address: UqTuid<TuidAddress>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	County: UqTuid<TuidCounty>;
	Customer: UqTuid<TuidCustomer>;
	$user: UqTuid<Tuid$user>;
	WebUser: UqTuid<TuidWebUser>;
	AuditPendingUserRefuseReason: UqTuid<TuidAuditPendingUserRefuseReason>;
	City: UqTuid<TuidCity>;
	InvoiceType: UqTuid<TuidInvoiceType>;
	BuyerAccount: UqTuid<TuidBuyerAccount>;
	Currency: UqTuid<TuidCurrency>;
	$sheet: UqTuid<Tuid$sheet>;
	Country: UqTuid<TuidCountry>;
	Province: UqTuid<TuidProvince>;
	Contact: UqTuid<TuidContact>;
	WebUserSettingType: UqTuid<TuidWebUserSettingType>;
	VIPCardType: UqTuid<TuidVIPCardType>;
	ProductX: UqTuid<TuidProductX>;
	Brand: UqTuid<TuidBrand>;
	Chemical: UqTuid<TuidChemical>;
	AuditPendingUser: UqAction<ParamAuditPendingUser, ResultAuditPendingUser>;
	AuditPendingUserRefuse: UqAction<ParamAuditPendingUserRefuse, ResultAuditPendingUserRefuse>;
	RecordLogin: UqAction<ParamRecordLogin, ResultRecordLogin>;
	SetCustomerMainWebUser: UqAction<ParamSetCustomerMainWebUser, ResultSetCustomerMainWebUser>;
	ApplyAuditUser: UqAction<ParamApplyAuditUser, ResultApplyAuditUser>;
	PendingAuditWebUser: UqBook<ParamPendingAuditWebUser, ResultPendingAuditWebUser>;
	GetPendingAuditUser: UqQuery<ParamGetPendingAuditUser, ResultGetPendingAuditUser>;
	SearchHavingRefuseUser: UqQuery<ParamSearchHavingRefuseUser, ResultSearchHavingRefuseUser>;
	SearchHavingAuditUser: UqQuery<ParamSearchHavingAuditUser, ResultSearchHavingAuditUser>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetMyFavirates: UqQuery<ParamGetMyFavirates, ResultGetMyFavirates>;
	GetMyExpiredCoupon: UqQuery<ParamGetMyExpiredCoupon, ResultGetMyExpiredCoupon>;
	GetMyUsedCoupon: UqQuery<ParamGetMyUsedCoupon, ResultGetMyUsedCoupon>;
	SearchCouponReceive: UqQuery<ParamSearchCouponReceive, ResultSearchCouponReceive>;
	GetWebUserByCustomer: UqQuery<ParamGetWebUserByCustomer, ResultGetWebUserByCustomer>;
	WebUserBuyerAccount: UqMap;
	WebUserContact: UqMap;
	WebUserCustomer: UqMap;
	WebUserSettingAlter: UqMap;
	WebUserContacts: UqMap;
	WebUserSetting: UqMap;
	WebUserVIPCard: UqMap;
	WebUserCoupon: UqMap;
	WebUserCouponUsed: UqMap;
	MyFavorites: UqMap;
	WebUserAuditHistory: UqHistory<ParamWebUserAuditHistory, ResultWebUserAuditHistory>;
	WebUserAuditRefuseHistory: UqHistory<ParamWebUserAuditRefuseHistory, ResultWebUserAuditRefuseHistory>;
	LoginHistory: UqHistory<ParamLoginHistory, ResultLoginHistory>;
}
