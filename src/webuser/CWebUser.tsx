import { CUqBase } from "uq-app";
import { VWebUserName } from './VWebUserName';

export class CWebUser extends CUqBase {

    protected async internalStart(param: any) {
    }

    getWebuserName = async (webuser: any) => {
        let user = await this.uqs.JkseWebuser.WebUser.load(webuser);
        return user;
    }

    renderWebuserName = (param: any) => {
        return this.renderView(VWebUserName, param);
    }

}