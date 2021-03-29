import { QueryPager } from "tonva-react";
import { observable } from 'mobx';
import { CUqBase } from '../CBase';
import { VInnerCustomerCall } from './VInnerCustomerCall';

/**
 *
 */
export class CInnerCustomer extends CUqBase {
    @observable pageWebUser: QueryPager<any>;


    //初始化
    protected async internalStart() {
        this.pageWebUser = null;
        this.openVPage(VInnerCustomerCall);
    }

    //查询客户--通过名称
    searchByKey = async (key: string) => {
        this.pageWebUser = new QueryPager(this.uqs.JkseCustomer.SearchCustomer, 15, 30);
        this.pageWebUser.first({ key: key });
    }

    returnWebUser = async (webuser: any): Promise<any> => {
        this.returnCall(webuser);
    }
}