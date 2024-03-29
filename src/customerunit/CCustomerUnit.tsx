import { QueryPager } from "tonva-react";
import { observable } from 'mobx';
import { CUqBase } from "uq-app";
import { VCustomerUnitSelect } from './VCustomerUnitSelect';
import { VCreateCustomerUnit } from './VCreateCustomerUnit';
import { VCustomerUnitDetail } from './VCustomerUnitDetail';
/* eslint-disable */

export class CCustomerUnit extends CUqBase {
    @observable pageUnit: QueryPager<any>;

    //初始化
    protected async internalStart(type: any) {
        this.pageUnit = null;
        this.searchByKey('');
        this.openVPage(VCustomerUnitSelect, type);
    }

    //查询客户--通过名称
    searchByKey = async (key: string) => {
        this.pageUnit = new QueryPager(this.uqs.JkseSalesTask.SearchMyCustomerUnit, 15, 30);
        this.pageUnit.first({ key: key });
    }

    /**
     * 显示新建单位
     */
    showCreateOrganization = async (type: any) => {
        let orgnization = await this.vCall(VCreateCustomerUnit);
        if (type === 1) {
            this.showCreateCustomer(orgnization);
        } else {
            this.pageUnit = null;
            this.searchByKey('');
        }
    }

    //新建客户单位
    createOrganization = async (param: any) => {
        let par = {
            name: param.Name
        }
        let { MyCustomerUnit, CreateMyCustomerUnit } = this.uqs.JkseSalesTask;
        let organization = await CreateMyCustomerUnit.submit(par);
        let organizationBox = organization && MyCustomerUnit.boxId(organization.id);

        this.backPage();
        this.returnCall(organizationBox);
    }

    //显示单位明细
    showCustomerUnitDetail = async (param: any) => {
        let unit = await this.uqs.JkseSalesTask.MyCustomerUnit.load(param);
        this.openVPage(VCustomerUnitDetail, unit);
    }

    /**
     * 显示新建客户页面
     */
    showCreateCustomer = async (param: any) => {
        this.cApp.cCustomer.showCreateCustomer(param);
    }

    //显示单位明细
    showCustomerUnitEdit = async (param: any) => {
        let unit = await this.uqs.JkseSalesTask.MyCustomerUnit.load(param);
        this.openVPage(VCustomerUnitDetail, unit);
    }

    //修改单位信息
    updateMyCustomerUnit = async (param: any) => {
        await this.uqs.JkseSalesTask.MyCustomerUnit.save(param.id, param);
        this.closePage();
    }

    //选择客户--给调用页面返回客户id
    returnCustomerUnit = async (customerunit: any): Promise<any> => {
        this.returnCall(customerunit);
    }


}