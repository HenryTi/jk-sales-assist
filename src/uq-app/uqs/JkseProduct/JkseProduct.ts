//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqMap, UqHistory, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/product ========
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

export interface TuidChemical {
	CAS: string;
}

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidCurrency {
	name: string;
	suffix: string;
}

export interface TuidPackType {
	name: string;
	description: string;
}

export interface TuidLanguage {
	no: string;
	description: string;
}

export interface TuidBrand {
	name: string;
	no: string;
}

export interface TuidStuff {
	name: string;
	packType: number;
}

export interface TuidProductX {
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	no: string;
	isValid: number;
}

export interface TuidProductCategory {
	no: number;
	parent: number;
	isLeaf: number;
	orderWithinParent: number;
}

export interface TuidLot {
	lotnumber: string;
	product: number;
}

export interface ParamCountProductCategoryInclusion {
}
interface ResultCountProductCategoryInclusion {
}

export interface ParamGetRootCategory {
	salesRegion: number;
	language: number;
}
interface ReturnGetRootCategoryFirst {
	productCategory: number;
	name: string;
	total: number;
}
interface ReturnGetRootCategorySecend {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ReturnGetRootCategoryThird {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ResultGetRootCategory {
	first: ReturnGetRootCategoryFirst[];
	secend: ReturnGetRootCategorySecend[];
	third: ReturnGetRootCategoryThird[];
}

export interface ParamGetChildrenCategory {
	parent: number;
	salesRegion: number;
	language: number;
}
interface ReturnGetChildrenCategoryFirst {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ReturnGetChildrenCategorySecend {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ResultGetChildrenCategory {
	first: ReturnGetChildrenCategoryFirst[];
	secend: ReturnGetChildrenCategorySecend[];
}

export interface ParamSearchProductByCategory {
	productCategory: number;
	salesRegion: number;
	language: number;
}
interface ReturnSearchProductByCategory$page {
	$order: number;
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
interface ResultSearchProductByCategory {
	$page: ReturnSearchProductByCategory$page[];
}

export interface ParamGetFutureDeliveryTime {
	product: number;
	salesRegion: number;
}
interface ReturnGetFutureDeliveryTimeRet {
	minValue: number;
	maxValue: number;
	unit: string;
	deliveryTimeDescription: string;
}
interface ResultGetFutureDeliveryTime {
	ret: ReturnGetFutureDeliveryTimeRet[];
}

export interface ParamSearchProduct {
	keyWord: string;
	salesRegion: number;
}
interface ReturnSearchProduct$page {
	$order: number;
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
interface ResultSearchProduct {
	$page: ReturnSearchProduct$page[];
}

export interface ParamGetRootCategories {
	salesRegion: number;
	language: number;
}
interface ReturnGetRootCategoriesRet {
	productCategory: number;
	name: string;
	total: number;
}
interface ResultGetRootCategories {
	ret: ReturnGetRootCategoriesRet[];
}

export interface ParamGetPack {
	brandName: string;
	origin: string;
	radiox: number;
	radioy: number;
	unit: string;
}
interface ReturnGetPackRet {
	product: number;
	pack: number;
	jkcat: string;
}
interface ResultGetPack {
	ret: ReturnGetPackRet[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamSearchPointProduct {
	keyWord: string;
	salesRegion: number;
}
interface ReturnSearchPointProduct$page {
	$order: number;
	seq: number;
	id: number;
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	radiox: number;
	radioy: number;
	unit: string;
	retail: number;
}
interface ResultSearchPointProduct {
	$page: ReturnSearchPointProduct$page[];
}

export interface ParamGetProductByOrigin {
	origin: string;
	salesRegion: number;
}
interface ReturnGetProductByOriginRet {
	id: number;
}
interface ResultGetProductByOrigin {
	ret: ReturnGetProductByOriginRet[];
}

export interface ParamGetPointProductMoreBySource {
	pack: number;
	salesRegion: number;
}
interface ReturnGetPointProductMoreBySourceRet {
	id: number;
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	radiox: number;
	radioy: number;
	unit: string;
	retail: number;
}
interface ResultGetPointProductMoreBySource {
	ret: ReturnGetPointProductMoreBySourceRet[];
}

export interface ParamGetLotByLotnumber {
	lotnumber: string;
	origin: string;
}
interface ReturnGetLotByLotnumberRet {
	id: number;
	product: number;
}
interface ResultGetLotByLotnumber {
	ret: ReturnGetLotByLotnumberRet[];
}

export interface ParamProductSearchHistory {
	webUser: number;
	salesRegion: number;
	keyword: string;
}
interface ReturnProductSearchHistory$page {
	date: any;
	webUser: number;
	salesRegion: number;
	keyword: string;
}
interface ResultProductSearchHistory {
	$page: ReturnProductSearchHistory$page[];
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface $Piecewise {
	id?: number;
	name: string;
	mul: number;
	div: number;
	offset: number;
	asc: number;
}

export interface ParamActs {
	$PiecewiseDetail?: $PiecewiseDetail[];
	$Piecewise?: $Piecewise[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	Chemical: UqTuid<TuidChemical>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	Currency: UqTuid<TuidCurrency>;
	PackType: UqTuid<TuidPackType>;
	Language: UqTuid<TuidLanguage>;
	Brand: UqTuid<TuidBrand>;
	Stuff: UqTuid<TuidStuff>;
	ProductX: UqTuid<TuidProductX>;
	ProductCategory: UqTuid<TuidProductCategory>;
	Lot: UqTuid<TuidLot>;
	CountProductCategoryInclusion: UqAction<ParamCountProductCategoryInclusion, ResultCountProductCategoryInclusion>;
	GetRootCategory: UqQuery<ParamGetRootCategory, ResultGetRootCategory>;
	GetChildrenCategory: UqQuery<ParamGetChildrenCategory, ResultGetChildrenCategory>;
	SearchProductByCategory: UqQuery<ParamSearchProductByCategory, ResultSearchProductByCategory>;
	GetFutureDeliveryTime: UqQuery<ParamGetFutureDeliveryTime, ResultGetFutureDeliveryTime>;
	SearchProduct: UqQuery<ParamSearchProduct, ResultSearchProduct>;
	GetRootCategories: UqQuery<ParamGetRootCategories, ResultGetRootCategories>;
	GetPack: UqQuery<ParamGetPack, ResultGetPack>;
	$poked: UqQuery<Param$poked, Result$poked>;
	SearchPointProduct: UqQuery<ParamSearchPointProduct, ResultSearchPointProduct>;
	GetProductByOrigin: UqQuery<ParamGetProductByOrigin, ResultGetProductByOrigin>;
	GetPointProductMoreBySource: UqQuery<ParamGetPointProductMoreBySource, ResultGetPointProductMoreBySource>;
	GetLotByLotnumber: UqQuery<ParamGetLotByLotnumber, ResultGetLotByLotnumber>;
	AgentPrice: UqMap;
	BrandSalesRegion: UqMap;
	BrandDeliveryTime: UqMap;
	ProductStuff: UqMap;
	PriceX: UqMap;
	ProductChemical: UqMap;
	ProductSalesRegion: UqMap;
	ProductLegallyProhibited: UqMap;
	ProductCache: UqMap;
	ProductProductCategory: UqMap;
	ProductCategoryInclusion: UqMap;
	ProductProductCategoryCache: UqMap;
	ProductMSDSFile: UqMap;
	ProductSpecFile: UqMap;
	ProductSalesRank: UqMap;
	ProductCategoryLeafCache: UqMap;
	COA: UqMap;
	ProductExtention: UqMap;
	ProductSearchHistory: UqHistory<ParamProductSearchHistory, ResultProductSearchHistory>;
	$PiecewiseDetail: UqID<any>;
	$Piecewise: UqID<any>;
}
