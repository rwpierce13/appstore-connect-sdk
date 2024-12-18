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
import type { SubscriptionOfferCodeUpdateRequestData } from './SubscriptionOfferCodeUpdateRequestData';
import {
    SubscriptionOfferCodeUpdateRequestDataFromJSON,
    SubscriptionOfferCodeUpdateRequestDataFromJSONTyped,
    SubscriptionOfferCodeUpdateRequestDataToJSON,
} from './SubscriptionOfferCodeUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeUpdateRequest
 */
export interface SubscriptionOfferCodeUpdateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeUpdateRequestData}
     * @memberof SubscriptionOfferCodeUpdateRequest
     */
    data: SubscriptionOfferCodeUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeUpdateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionOfferCodeUpdateRequestFromJSON(json: any): SubscriptionOfferCodeUpdateRequest {
    return SubscriptionOfferCodeUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionOfferCodeUpdateRequestToJSON(value?: SubscriptionOfferCodeUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeUpdateRequestDataToJSON(value.data),
    };
}

