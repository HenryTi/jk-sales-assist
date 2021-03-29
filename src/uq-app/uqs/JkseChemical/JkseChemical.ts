//=== UqApp builder created on Mon Mar 29 2021 14:34:07 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/chemical ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	roles: number;
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
	no: number;
	CAS: string;
	description: string;
	descriptoinCN: string;
	molecularFomula: string;
	molecularWeight: number;
	mdlNumber: string;
}

export interface TuidStorageCondition {
	name: string;
	no: string;
}

export interface TuidLanguage {
}

export interface ParamSearchChemical {
	key: string;
}
interface ReturnSearchChemical$page {
	id: number;
	no: number;
	CAS: string;
	description: string;
	descriptoinCN: string;
	molecularFomula: string;
	molecularWeight: number;
	mdlNumber: string;
	$id: number;
}
interface ResultSearchChemical {
	$page: ReturnSearchChemical$page[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	Chemical: UqTuid<TuidChemical>;
	StorageCondition: UqTuid<TuidStorageCondition>;
	Language: UqTuid<TuidLanguage>;
	SearchChemical: UqQuery<ParamSearchChemical, ResultSearchChemical>;
	$poked: UqQuery<Param$poked, Result$poked>;
	ChemicalSynonymity: UqMap;
}
