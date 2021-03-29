//=== UqApp builder created on Tue Jan 12 2021 23:14:51 GMT-0500 (GMT-05:00) ===//
import { AppConfig, DevConfig } from "tonva-react";

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
			name: 'chemical',
			version: '0.1.0',
		},
		{
			dev: jkse,
			name: 'hr',
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
			name: 'vipcardtype',
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