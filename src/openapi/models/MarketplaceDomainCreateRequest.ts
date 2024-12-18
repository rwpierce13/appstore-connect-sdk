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
import type { MarketplaceDomainCreateRequestData } from './MarketplaceDomainCreateRequestData';
import {
    MarketplaceDomainCreateRequestDataFromJSON,
    MarketplaceDomainCreateRequestDataFromJSONTyped,
    MarketplaceDomainCreateRequestDataToJSON,
} from './MarketplaceDomainCreateRequestData';

/**
 * 
 * @export
 * @interface MarketplaceDomainCreateRequest
 */
export interface MarketplaceDomainCreateRequest {
    /**
     * 
     * @type {MarketplaceDomainCreateRequestData}
     * @memberof MarketplaceDomainCreateRequest
     */
    data: MarketplaceDomainCreateRequestData;
}

/**
 * Check if a given object implements the MarketplaceDomainCreateRequest interface.
 */
export function instanceOfMarketplaceDomainCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function MarketplaceDomainCreateRequestFromJSON(json: any): MarketplaceDomainCreateRequest {
    return MarketplaceDomainCreateRequestFromJSONTyped(json, false);
}

export function MarketplaceDomainCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': MarketplaceDomainCreateRequestDataFromJSON(json['data']),
    };
}

export function MarketplaceDomainCreateRequestToJSON(value?: MarketplaceDomainCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': MarketplaceDomainCreateRequestDataToJSON(value.data),
    };
}
