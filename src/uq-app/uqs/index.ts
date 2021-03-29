//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
import * as JkseSalesTask from './JkseSalesTask';
import * as JkseCommon from './JkseCommon';
import * as JkseProduct from './JkseProduct';
import * as JkseCustomer from './JkseCustomer';
import * as JkseWebbuilder from './JkseWebbuilder';
import * as JkseWebuser from './JkseWebuser';
import * as JkseHr from './JkseHr';
import * as JkseChemical from './JkseChemical';
import * as JkseVipcardtype from './JkseVipcardtype';
import * as JkseOrderDraft from './JkseOrderDraft';
import * as JkseOrder from './JkseOrder';
import * as JkseWarehouse from './JkseWarehouse';
import * as JksePromotion from './JksePromotion';
import * as BzHelloTonva from './BzHelloTonva';

export interface UQs {
	JkseSalesTask: JkseSalesTask.UqExt;
	JkseCommon: JkseCommon.UqExt;
	JkseProduct: JkseProduct.UqExt;
	JkseCustomer: JkseCustomer.UqExt;
	JkseWebbuilder: JkseWebbuilder.UqExt;
	JkseWebuser: JkseWebuser.UqExt;
	JkseHr: JkseHr.UqExt;
	JkseChemical: JkseChemical.UqExt;
	JkseVipcardtype: JkseVipcardtype.UqExt;
	JkseOrderDraft: JkseOrderDraft.UqExt;
	JkseOrder: JkseOrder.UqExt;
	JkseWarehouse: JkseWarehouse.UqExt;
	JksePromotion: JksePromotion.UqExt;
	BzHelloTonva: BzHelloTonva.UqExt;
}

export * as JkseSalesTask from './JkseSalesTask';
export * as JkseCommon from './JkseCommon';
export * as JkseProduct from './JkseProduct';
export * as JkseCustomer from './JkseCustomer';
export * as JkseWebbuilder from './JkseWebbuilder';
export * as JkseWebuser from './JkseWebuser';
export * as JkseHr from './JkseHr';
export * as JkseChemical from './JkseChemical';
export * as JkseVipcardtype from './JkseVipcardtype';
export * as JkseOrderDraft from './JkseOrderDraft';
export * as JkseOrder from './JkseOrder';
export * as JkseWarehouse from './JkseWarehouse';
export * as JksePromotion from './JksePromotion';
export * as BzHelloTonva from './BzHelloTonva';

export function setUI(uqs:UQs) {
	JkseSalesTask.setUI(uqs.JkseSalesTask);
	JkseCommon.setUI(uqs.JkseCommon);
	JkseProduct.setUI(uqs.JkseProduct);
	JkseCustomer.setUI(uqs.JkseCustomer);
	JkseWebbuilder.setUI(uqs.JkseWebbuilder);
	JkseWebuser.setUI(uqs.JkseWebuser);
	JkseHr.setUI(uqs.JkseHr);
	JkseChemical.setUI(uqs.JkseChemical);
	JkseVipcardtype.setUI(uqs.JkseVipcardtype);
	JkseOrderDraft.setUI(uqs.JkseOrderDraft);
	JkseOrder.setUI(uqs.JkseOrder);
	JkseWarehouse.setUI(uqs.JkseWarehouse);
	JksePromotion.setUI(uqs.JksePromotion);
	BzHelloTonva.setUI(uqs.BzHelloTonva);
}
