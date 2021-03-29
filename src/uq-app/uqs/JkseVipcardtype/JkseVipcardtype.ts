//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/vipCardType ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	roles: number;
	poke: number;
}

export interface TuidBrand {
}

export interface TuidVIPCardType {
	name: string;
	description: string;
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

export interface TuidOrganization {
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

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	Brand: UqTuid<TuidBrand>;
	VIPCardType: UqTuid<TuidVIPCardType>;
	$sheet: UqTuid<Tuid$sheet>;
	Organization: UqTuid<TuidOrganization>;
	$poked: UqQuery<Param$poked, Result$poked>;
	VIPCardTypeDiscount: UqMap;
	OrganizationVIPLevel: UqMap;
}
