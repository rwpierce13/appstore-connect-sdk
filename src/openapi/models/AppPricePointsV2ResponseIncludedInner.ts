/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    App,
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import {
    AppPriceTier,
    instanceOfAppPriceTier,
    AppPriceTierFromJSON,
    AppPriceTierFromJSONTyped,
    AppPriceTierToJSON,
} from './AppPriceTier';
import {
    Territory,
    instanceOfTerritory,
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * @type AppPricePointsV2ResponseIncludedInner
 * 
 * @export
 */
export type AppPricePointsV2ResponseIncludedInner = App | AppPriceTier | Territory;

export function AppPricePointsV2ResponseIncludedInnerFromJSON(json: any): AppPricePointsV2ResponseIncludedInner {
    return AppPricePointsV2ResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppPricePointsV2ResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointsV2ResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...AppPriceTierFromJSONTyped(json, true), ...TerritoryFromJSONTyped(json, true) };
}

export function AppPricePointsV2ResponseIncludedInnerToJSON(value?: AppPricePointsV2ResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfAppPriceTier(value)) {
        return AppPriceTierToJSON(value as AppPriceTier);
    }
    if (instanceOfTerritory(value)) {
        return TerritoryToJSON(value as Territory);
    }

    return {};
}
