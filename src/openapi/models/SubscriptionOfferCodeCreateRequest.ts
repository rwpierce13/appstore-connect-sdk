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
import type { SubscriptionOfferCodeCreateRequestData } from './SubscriptionOfferCodeCreateRequestData';
import {
    SubscriptionOfferCodeCreateRequestDataFromJSON,
    SubscriptionOfferCodeCreateRequestDataFromJSONTyped,
    SubscriptionOfferCodeCreateRequestDataToJSON,
} from './SubscriptionOfferCodeCreateRequestData';
import type { SubscriptionOfferCodePriceInlineCreate } from './SubscriptionOfferCodePriceInlineCreate';
import {
    SubscriptionOfferCodePriceInlineCreateFromJSON,
    SubscriptionOfferCodePriceInlineCreateFromJSONTyped,
    SubscriptionOfferCodePriceInlineCreateToJSON,
} from './SubscriptionOfferCodePriceInlineCreate';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequest
 */
export interface SubscriptionOfferCodeCreateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeCreateRequestData}
     * @memberof SubscriptionOfferCodeCreateRequest
     */
    data: SubscriptionOfferCodeCreateRequestData;
    /**
     * 
     * @type {Array<SubscriptionOfferCodePriceInlineCreate>}
     * @memberof SubscriptionOfferCodeCreateRequest
     */
    included?: Array<SubscriptionOfferCodePriceInlineCreate>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCreateRequestFromJSON(json: any): SubscriptionOfferCodeCreateRequest {
    return SubscriptionOfferCodeCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeCreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodePriceInlineCreateFromJSON)),
    };
}

export function SubscriptionOfferCodeCreateRequestToJSON(value?: SubscriptionOfferCodeCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeCreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodePriceInlineCreateToJSON)),
    };
}

