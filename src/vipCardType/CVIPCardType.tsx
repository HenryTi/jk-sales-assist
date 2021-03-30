import { CUqBase } from "uq-app";

export class CVIPCardType extends CUqBase {

    private targetWebUser: any;
    targetWebUserVIPLevel: any;
    protected async internalStart(targetWebUser: any) {
        this.targetWebUser = targetWebUser;

        let { uqs } = this;
        let { JkseWebuser, JkseCustomer, JkseVipcardtype } = uqs;
        this.targetWebUserVIPLevel = await JkseVipcardtype.VIPCardType.load(1);
        let wcMap: any = await JkseWebuser.WebUserCustomer.obj({ webUser: targetWebUser });
        if (wcMap) {
            let { customer: customerTuid } = wcMap;
            let coMap: any = await JkseCustomer.GetCustomerOrganization.obj({ customerId: customerTuid });
            let organization = coMap && coMap.organization;
            if (organization) {
                let olMap: any = await JkseVipcardtype.OrganizationVIPLevel.obj({ organization: organization });
                if (olMap) {
                    let { vipCardLevel } = olMap;
                    this.targetWebUserVIPLevel = vipCardLevel;
                }
            }
        }
        this.showCreateVIPCardDiscount(this.targetWebUserVIPLevel);
        /*
        let vipCardTypes = await this.getVIPCardTypeList();
        this.openVPage(VVIPCardTypeList, vipCardTypes);
        if (this.targetWebUserVIPLevel.id === 1) {
            this.showCreateVIPCardDiscount(this.targetWebUserVIPLevel);
        }
        */
    }

    getVIPCardTypeList = async () => {

        let { JkseVipcardtype } = this.uqs;
        let cardTypes = await JkseVipcardtype.VIPCardType.all();
        return cardTypes;
    }

    /*
    renderVIPCardTypeList = () => {
        return this.renderView(VVIPTypeList);
    }
    */

    showCreateVIPCardDiscount = async (vipCardLevel: any) => {

        let { uqs, cApp } = this;
        let { cCoupon } = cApp;
        let { JkseVipcardtype } = uqs;
        let vipCardLevelDiscountSetting = await JkseVipcardtype.VIPCardTypeDiscount.table({ vipCard: vipCardLevel.id });
        let newVIPCard = await cCoupon.call<any>({ webUser: this.targetWebUser, vipCardLevel, vipCardType: "vipcard", vipCardLevelDiscountSetting });

        this.returnCall(newVIPCard);
        // 跳转到分享界面
        cCoupon.showShareCoupon(newVIPCard);
    }
}