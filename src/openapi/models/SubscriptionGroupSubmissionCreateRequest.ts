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
import type { SubscriptionGroupSubmissionCreateRequestData } from './SubscriptionGroupSubmissionCreateRequestData';
import {
    SubscriptionGroupSubmissionCreateRequestDataFromJSON,
    SubscriptionGroupSubmissionCreateRequestDataFromJSONTyped,
    SubscriptionGroupSubmissionCreateRequestDataToJSON,
} from './SubscriptionGroupSubmissionCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionGroupSubmissionCreateRequest
 */
export interface SubscriptionGroupSubmissionCreateRequest {
    /**
     * 
     * @type {SubscriptionGroupSubmissionCreateRequestData}
     * @memberof SubscriptionGroupSubmissionCreateRequest
     */
    data: SubscriptionGroupSubmissionCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionGroupSubmissionCreateRequest interface.
 */
export function instanceOfSubscriptionGroupSubmissionCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionGroupSubmissionCreateRequestFromJSON(json: any): SubscriptionGroupSubmissionCreateRequest {
    return SubscriptionGroupSubmissionCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionGroupSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupSubmissionCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionGroupSubmissionCreateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionGroupSubmissionCreateRequestToJSON(value?: SubscriptionGroupSubmissionCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionGroupSubmissionCreateRequestDataToJSON(value.data),
    };
}

