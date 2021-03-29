import { VAddress } from './VAddress';
import { CUqBase } from '../CBase';
import { TuidAddress } from 'uq-app/uqs/JkseCommon';

export class CAddress extends CUqBase {
    //private cApp: CSalesTaskApp;
    /*
    private getCountryProvincesQuery: Query;
    private getProvinceCitiesQuery: Query;
    private getCityCountiesQuery: Query;
    private addressTuid: Tuid;
    */

    /*
    constructor(cApp: CSalesTaskApp, res: any) {
        super(res);
        this.cApp = cApp;

        let { cUqCommon } = this.cApp;
        this.getCountryProvincesQuery = cUqCommon.query('GetCountryProvinces');
        this.getProvinceCitiesQuery = cUqCommon.query('GetProvinceCities');
        this.getCityCountiesQuery = cUqCommon.query('GetCityCounties');
        this.addressTuid = cUqCommon.tuid("Address");
    }
    */

    protected async internalStart() {
        this.openVPage(VAddress);
    }

    getCountryProvince = async (countryId: number): Promise<any[]> => {
        return await this.uqs.JkseCommon.GetCountryProvinces.table({ country: countryId });
    }

    getProvinceCities = async (provinceId: number): Promise<any[]> => {
        return await this.uqs.JkseCommon.GetProvinceCities.table({ province: provinceId });
    }

    getCityCounties = async (cityId: number): Promise<any[]> => {
        return await this.uqs.JkseCommon.GetCityCounties.table({ city: cityId });
    }

    saveAddress = async (countryId: number, provinceId: number, cityId?: number, countyId?: number): Promise<any> => {
        let { Address } = this.uqs.JkseCommon;
        let newAddress = await Address.save(undefined, { country: countryId, province: provinceId, city: cityId, county: countyId } as TuidAddress);
        let addressId = newAddress && Address.boxId(newAddress.id);
        this.returnCall(addressId);
    }
}
