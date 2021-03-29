//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/promotion ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
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

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidLanguage {
	no: string;
	description: string;
}

export interface TuidCurrency {
	name: string;
	suffix: string;
}

export interface TuidProductX {
	brand: number;
}

export interface TuidBrand {
	name: string;
	no: string;
}

export interface TuidPromotion {
	name: string;
	type: number;
	status: number;
	startDate: any;
	endDate: any;
	createTime: any;
	no: string;
}

export interface TuidPromotionType {
	no: string;
	description: string;
}

export interface TuidPromotionStatus {
	no: string;
	description: string;
}

export interface TuidChemical {
	CAS: string;
}

export interface TuidProductCategory {
	no: number;
	parent: number;
	isLeaf: number;
	orderWithinParent: number;
}

export interface ParamGetPromotionPack {
	product: number;
	pack: number;
	salesRegion: number;
	language: number;
}
interface ReturnGetPromotionPackRet {
	id: number;
	salesRegion: number;
	description: string;
	url: string;
	product: number;
	pack: number;
	discount: number;
}
interface ResultGetPromotionPack {
	ret: ReturnGetPromotionPackRet[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamSearchPromotion {
	keyWord: string;
	promotion: number;
	salesRegion: number;
}
interface ReturnSearchPromotion$page {
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
}
interface ResultSearchPromotion {
	$page: ReturnSearchPromotion$page[];
}

export interface $Piecewise {
	id?: number;
	name: string;
	mul: number;
	div: number;
	offset: number;
	asc: number;
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface ParamActs {
	$Piecewise?: $Piecewise[];
	$PiecewiseDetail?: $PiecewiseDetail[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	Language: UqTuid<TuidLanguage>;
	Currency: UqTuid<TuidCurrency>;
	ProductX: UqTuid<TuidProductX>;
	Brand: UqTuid<TuidBrand>;
	Promotion: UqTuid<TuidPromotion>;
	PromotionType: UqTuid<TuidPromotionType>;
	PromotionStatus: UqTuid<TuidPromotionStatus>;
	Chemical: UqTuid<TuidChemical>;
	ProductCategory: UqTuid<TuidProductCategory>;
	GetPromotionPack: UqQuery<ParamGetPromotionPack, ResultGetPromotionPack>;
	$poked: UqQuery<Param$poked, Result$poked>;
	SearchPromotion: UqQuery<ParamSearchPromotion, ResultSearchPromotion>;
	PromotionSalesRegion: UqMap;
	PromotionLanguage: UqMap;
	PromotionPackDiscount: UqMap;
	$Piecewise: UqID<any>;
	$PiecewiseDetail: UqID<any>;
}
