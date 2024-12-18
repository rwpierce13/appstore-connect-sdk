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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import type { AppPriceScheduleRelationshipsBaseTerritory } from './AppPriceScheduleRelationshipsBaseTerritory';
import {
    AppPriceScheduleRelationshipsBaseTerritoryFromJSON,
    AppPriceScheduleRelationshipsBaseTerritoryFromJSONTyped,
    AppPriceScheduleRelationshipsBaseTerritoryToJSON,
} from './AppPriceScheduleRelationshipsBaseTerritory';
import type { AppPriceScheduleRelationshipsManualPrices } from './AppPriceScheduleRelationshipsManualPrices';
import {
    AppPriceScheduleRelationshipsManualPricesFromJSON,
    AppPriceScheduleRelationshipsManualPricesFromJSONTyped,
    AppPriceScheduleRelationshipsManualPricesToJSON,
} from './AppPriceScheduleRelationshipsManualPrices';

/**
 * 
 * @export
 * @interface AppPriceScheduleRelationships
 */
export interface AppPriceScheduleRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AppPriceScheduleRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppPriceScheduleRelationshipsBaseTerritory}
     * @memberof AppPriceScheduleRelationships
     */
    baseTerritory?: AppPriceScheduleRelationshipsBaseTerritory;
    /**
     * 
     * @type {AppPriceScheduleRelationshipsManualPrices}
     * @memberof AppPriceScheduleRelationships
     */
    manualPrices?: AppPriceScheduleRelationshipsManualPrices;
    /**
     * 
     * @type {AppPriceScheduleRelationshipsManualPrices}
     * @memberof AppPriceScheduleRelationships
     */
    automaticPrices?: AppPriceScheduleRelationshipsManualPrices;
}

/**
 * Check if a given object implements the AppPriceScheduleRelationships interface.
 */
export function instanceOfAppPriceScheduleRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPriceScheduleRelationshipsFromJSON(json: any): AppPriceScheduleRelationships {
    return AppPriceScheduleRelationshipsFromJSONTyped(json, false);
}

export function AppPriceScheduleRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'baseTerritory': !exists(json, 'baseTerritory') ? undefined : AppPriceScheduleRelationshipsBaseTerritoryFromJSON(json['baseTerritory']),
        'manualPrices': !exists(json, 'manualPrices') ? undefined : AppPriceScheduleRelationshipsManualPricesFromJSON(json['manualPrices']),
        'automaticPrices': !exists(json, 'automaticPrices') ? undefined : AppPriceScheduleRelationshipsManualPricesFromJSON(json['automaticPrices']),
    };
}

export function AppPriceScheduleRelationshipsToJSON(value?: AppPriceScheduleRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value.app),
        'baseTerritory': AppPriceScheduleRelationshipsBaseTerritoryToJSON(value.baseTerritory),
        'manualPrices': AppPriceScheduleRelationshipsManualPricesToJSON(value.manualPrices),
        'automaticPrices': AppPriceScheduleRelationshipsManualPricesToJSON(value.automaticPrices),
    };
}

