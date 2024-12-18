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
 * @interface AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory
 */
export interface AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritoryData}
     * @memberof AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory
     */
    data: AppPricePointV3RelationshipsTerritoryData;
}

/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory interface.
 */
export function instanceOfAppPriceScheduleCreateRequestDataRelationshipsBaseTerritory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json: any): AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    return AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json, false);
}

export function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPricePointV3RelationshipsTerritoryDataFromJSON(json['data']),
    };
}

export function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value?: AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPricePointV3RelationshipsTerritoryDataToJSON(value.data),
    };
}
