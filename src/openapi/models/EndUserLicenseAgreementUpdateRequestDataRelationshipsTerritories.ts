/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppPricePointV3RelationshipsTerritoryData } from './AppPricePointV3RelationshipsTerritoryData';
import {
    AppPricePointV3RelationshipsTerritoryDataFromJSON,
    AppPricePointV3RelationshipsTerritoryDataFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryDataToJSON,
} from './AppPricePointV3RelationshipsTerritoryData';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories
 */
export interface EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories {
    /**
     * 
     * @type {Array<AppPricePointV3RelationshipsTerritoryData>}
     * @memberof EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories
     */
    data?: Array<AppPricePointV3RelationshipsTerritoryData>;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories interface.
 */
export function instanceOfEndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFromJSON(json: any): EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories {
    return EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppPricePointV3RelationshipsTerritoryDataFromJSON)),
    };
}

export function EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesToJSON(value?: EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppPricePointV3RelationshipsTerritoryDataToJSON)),
    };
}
