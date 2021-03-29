//=== UqApp builder created on Tue Jan 12 2021 23:14:51 GMT-0500 (GMT-05:00) ===//
import { AppConfig, DevConfig, env } from "tonva-react";
import { AppEnv } from "./model/sales";

const bz: DevConfig = {
	name: 'bizdev',
	alias: 'bz',
}

const jkse: DevConfig = {
	name: '百灵威系统工程部',
	alias: 'jkse'
}

export const appConfig: AppConfig = {
	version: '0.1.0',
	app: undefined,
	uqs: [
		{
			dev: jkse,
			name: 'salesTask',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'common',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'product',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'customer',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'webbuilder',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'webuser',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'hr',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'chemical',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'vipcardtype',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'orderDraft',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'order',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'warehouse',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'promotion',
			version: '0.1.0',
		},
		{
			dev: bz,
			name: 'hello-tonva',
			alias: 'HelloTonva',
			version: '0.1.0',
		}
	],
	noUnit: true,
	tvs: {},
	oem: undefined,
	htmlTitle: 'hello-tonva',
};

const setting_agent = {
	pageHeaderCss: "bg-primary",
	sales: undefined as AppEnv,
	couponType: { "coupon": "优惠券", "credits": "积分券", "vipcard": "VIP卡" }
}

const setting_assist = {
	pageHeaderCss: "bg-primary",
	sales: undefined as AppEnv,
	couponType: { "coupon": "优惠券", "credits": "积分券", "vipcard": "VIP卡" }
}



const GLOABLE_PRODUCTION = {
	IsAssistApp: document.domain !== "assist.jkchemical.com",
	CHINA: 44,
	CHINESE: 196,
	SALESREGION_CN: 1,
	TIPDISPLAYTIME: 2000,
	url: "https://agent.jkchemical.com",
	carturl: "https://shop.jkchemical.com",
	posturl: "https://web.jkchemical.com/post",
}

const GLOABLE_TEST = {
	IsAssistApp: window.location.pathname.search(/^\/assist-test/) >= 0,
	CHINA: 43,
	CHINESE: 197,
	SALESREGION_CN: 4,
	TIPDISPLAYTIME: 2000,
	url: "https://agent.jkchemical.com",
	carturl: "https://shop.jkchemical.com",
	posturl: "https://web.jkchemical.com/post",
}

export const GLOABLE = env.testing === true ? GLOABLE_TEST : GLOABLE_PRODUCTION;
export const setting = GLOABLE.IsAssistApp ? setting_assist : setting_agent