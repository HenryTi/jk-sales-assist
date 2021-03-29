import { VAddress } from './VAddress';
import { CUqBase } from '../CBase';
import { TuidAddress } from 'uq-app/uqs/JkseCommon';

export class CAddress extends CUqBase {
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
        let newAddress = await Address.save(undefined, {
            country: countryId, province: provinceId, city: cityId, county: countyId, zipCode: undefined, description: undefined
        } as TuidAddress);
        let addressId = newAddress && Address.boxId(newAddress.id);
        this.returnCall(addressId);
    }
}
