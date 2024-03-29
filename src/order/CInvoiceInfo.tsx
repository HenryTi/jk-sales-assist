import { CUqBase } from 'uq-app';
import { VInvoiceInfo } from './VInvoiceInfo';

export class CInvoiceInfo extends CUqBase {
    private fromOrderCreation: boolean;

    async internalStart(origInvoice: any, fromOrderCreation: boolean) {
        this.fromOrderCreation = fromOrderCreation;
        this.openVPage(VInvoiceInfo, origInvoice);
    }

    async saveInvoiceInfo(invoice: any) {
        let { invoiceType, invoiceInfo, isDefault } = invoice;
        let newInvoiceInfo = await this.uqs.JkseCustomer.InvoiceInfo.save(undefined, invoiceInfo);

        let { id: newInvoiceInfoId } = newInvoiceInfo;
        let invoiceBox = {
            invoiceType: this.uqs.JkseCommon.InvoiceType.boxId(invoiceType),
            invoiceInfo: this.uqs.JkseCustomer.InvoiceInfo.boxId(newInvoiceInfoId),
        }

        if (this.fromOrderCreation) {
            this.backPage();
            this.returnCall(invoiceBox);
        }
    }
}