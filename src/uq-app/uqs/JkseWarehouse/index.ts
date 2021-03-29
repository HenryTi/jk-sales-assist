import { UqExt as Uq } from './JkseWarehouse';
import * as $PiecewiseDetail from './$PiecewiseDetail.ui';
import * as $Piecewise from './$Piecewise.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.$PiecewiseDetail, $PiecewiseDetail);
	Object.assign(uq.$Piecewise, $Piecewise);
}
export * from './JkseWarehouse';
