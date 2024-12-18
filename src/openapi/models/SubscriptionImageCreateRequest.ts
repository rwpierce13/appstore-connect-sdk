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
import type { SubscriptionImageCreateRequestData } from './SubscriptionImageCreateRequestData';
import {
    SubscriptionImageCreateRequestDataFromJSON,
    SubscriptionImageCreateRequestDataFromJSONTyped,
    SubscriptionImageCreateRequestDataToJSON,
} from './SubscriptionImageCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionImageCreateRequest
 */
export interface SubscriptionImageCreateRequest {
    /**
     * 
     * @type {SubscriptionImageCreateRequestData}
     * @memberof SubscriptionImageCreateRequest
     */
    data: SubscriptionImageCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionImageCreateRequest interface.
 */
export function instanceOfSubscriptionImageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionImageCreateRequestFromJSON(json: any): SubscriptionImageCreateRequest {
    return SubscriptionImageCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionImageCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionImageCreateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionImageCreateRequestToJSON(value?: SubscriptionImageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionImageCreateRequestDataToJSON(value.data),
    };
}
