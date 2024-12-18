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
import type { WinBackOfferRelationshipsPrices } from './WinBackOfferRelationshipsPrices';
import {
    WinBackOfferRelationshipsPricesFromJSON,
    WinBackOfferRelationshipsPricesFromJSONTyped,
    WinBackOfferRelationshipsPricesToJSON,
} from './WinBackOfferRelationshipsPrices';

/**
 * 
 * @export
 * @interface WinBackOfferRelationships
 */
export interface WinBackOfferRelationships {
    /**
     * 
     * @type {WinBackOfferRelationshipsPrices}
     * @memberof WinBackOfferRelationships
     */
    prices?: WinBackOfferRelationshipsPrices;
}

/**
 * Check if a given object implements the WinBackOfferRelationships interface.
 */
export function instanceOfWinBackOfferRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WinBackOfferRelationshipsFromJSON(json: any): WinBackOfferRelationships {
    return WinBackOfferRelationshipsFromJSONTyped(json, false);
}

export function WinBackOfferRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prices': !exists(json, 'prices') ? undefined : WinBackOfferRelationshipsPricesFromJSON(json['prices']),
    };
}

export function WinBackOfferRelationshipsToJSON(value?: WinBackOfferRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prices': WinBackOfferRelationshipsPricesToJSON(value.prices),
    };
}

