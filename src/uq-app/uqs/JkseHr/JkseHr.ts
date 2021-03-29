//=== UqApp builder created on Mon Mar 29 2021 14:34:07 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/hr ========
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

export interface TuidEmployee {
	name: string;
	no: string;
	firstName: string;
	lastName: string;
	title: string;
	Status: string;
	CreateTime: any;
}

export interface TuidRole {
	no: string;
	name: string;
	note: string;
	IsValid: number;
	CreateTime: any;
}

export interface ParamSearchEmployee {
	key: string;
}
interface ReturnSearchEmployee$page {
	id: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	title: string;
	Status: string;
	CreateTime: any;
	webuser: number;
	employee: number;
	$id: number;
}
interface ResultSearchEmployee {
	$page: ReturnSearchEmployee$page[];
}

export interface ParamSearchEmployeeByid {
	_id: number;
}
interface ReturnSearchEmployeeByidRet {
	id: number;
	name: string;
	firstName: string;
	lastName: string;
	title: string;
	$id: number;
}
interface ResultSearchEmployeeByid {
	ret: ReturnSearchEmployeeByidRet[];
}

export interface ParamSearchTeam {
	key: string;
}
interface ReturnSearchTeam$page {
	id: number;
	webuser: number;
	employee: number;
	$id: number;
}
interface ResultSearchTeam {
	$page: ReturnSearchTeam$page[];
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
	$sheet: UqTuid<Tuid$sheet>;
	Employee: UqTuid<TuidEmployee>;
	Role: UqTuid<TuidRole>;
	SearchEmployee: UqQuery<ParamSearchEmployee, ResultSearchEmployee>;
	SearchEmployeeByid: UqQuery<ParamSearchEmployeeByid, ResultSearchEmployeeByid>;
	SearchTeam: UqQuery<ParamSearchTeam, ResultSearchTeam>;
	$poked: UqQuery<Param$poked, Result$poked>;
	EmployeeRole: UqMap;
	WebuserEmployee: UqMap;
	EmployeeRelation: UqMap;
}
