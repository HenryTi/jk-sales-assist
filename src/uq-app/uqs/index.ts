//=== UqApp builder created on Mon Mar 29 2021 14:34:07 GMT+0800 (China Standard Time) ===//
import * as JkseSalesTask from './JkseSalesTask';
import * as JkseCommon from './JkseCommon';
import * as JkseChemical from './JkseChemical';
import * as JkseHr from './JkseHr';
import * as JkseProduct from './JkseProduct';
import * as JkseCustomer from './JkseCustomer';
import * as JkseWebbuilder from './JkseWebbuilder';
import * as JkseVipcardtype from './JkseVipcardtype';
import * as BzHelloTonva from './BzHelloTonva';

export interface UQs {
	JkseSalesTask: JkseSalesTask.UqExt;
	JkseCommon: JkseCommon.UqExt;
	JkseChemical: JkseChemical.UqExt;
	JkseHr: JkseHr.UqExt;
	JkseProduct: JkseProduct.UqExt;
	JkseCustomer: JkseCustomer.UqExt;
	JkseWebbuilder: JkseWebbuilder.UqExt;
	JkseVipcardtype: JkseVipcardtype.UqExt;
	BzHelloTonva: BzHelloTonva.UqExt;
}

export * as JkseSalesTask from './JkseSalesTask';
export * as JkseCommon from './JkseCommon';
export * as JkseChemical from './JkseChemical';
export * as JkseHr from './JkseHr';
export * as JkseProduct from './JkseProduct';
export * as JkseCustomer from './JkseCustomer';
export * as JkseWebbuilder from './JkseWebbuilder';
export * as JkseVipcardtype from './JkseVipcardtype';
export * as BzHelloTonva from './BzHelloTonva';

export function setUI(uqs:UQs) {
	JkseSalesTask.setUI(uqs.JkseSalesTask);
	JkseCommon.setUI(uqs.JkseCommon);
	JkseChemical.setUI(uqs.JkseChemical);
	JkseHr.setUI(uqs.JkseHr);
	JkseProduct.setUI(uqs.JkseProduct);
	JkseCustomer.setUI(uqs.JkseCustomer);
	JkseWebbuilder.setUI(uqs.JkseWebbuilder);
	JkseVipcardtype.setUI(uqs.JkseVipcardtype);
	BzHelloTonva.setUI(uqs.BzHelloTonva);
}
