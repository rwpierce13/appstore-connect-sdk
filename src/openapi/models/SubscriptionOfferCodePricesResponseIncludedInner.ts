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

import {
    SubscriptionPricePoint,
    instanceOfSubscriptionPricePoint,
    SubscriptionPricePointFromJSON,
    SubscriptionPricePointFromJSONTyped,
    SubscriptionPricePointToJSON,
} from './SubscriptionPricePoint';
import {
    Territory,
    instanceOfTerritory,
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * @type SubscriptionOfferCodePricesResponseIncludedInner
 * 
 * @export
 */
export type SubscriptionOfferCodePricesResponseIncludedInner = SubscriptionPricePoint | Territory;

export function SubscriptionOfferCodePricesResponseIncludedInnerFromJSON(json: any): SubscriptionOfferCodePricesResponseIncludedInner {
    return SubscriptionOfferCodePricesResponseIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionOfferCodePricesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodePricesResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...SubscriptionPricePointFromJSONTyped(json, true), ...TerritoryFromJSONTyped(json, true) };
}

export function SubscriptionOfferCodePricesResponseIncludedInnerToJSON(value?: SubscriptionOfferCodePricesResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSubscriptionPricePoint(value)) {
        return SubscriptionPricePointToJSON(value as SubscriptionPricePoint);
    }
    if (instanceOfTerritory(value)) {
        return TerritoryToJSON(value as Territory);
    }

    return {};
}

