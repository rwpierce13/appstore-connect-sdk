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
import type { EndAppAvailabilityPreOrderCreateRequestData } from './EndAppAvailabilityPreOrderCreateRequestData';
import {
    EndAppAvailabilityPreOrderCreateRequestDataFromJSON,
    EndAppAvailabilityPreOrderCreateRequestDataFromJSONTyped,
    EndAppAvailabilityPreOrderCreateRequestDataToJSON,
} from './EndAppAvailabilityPreOrderCreateRequestData';

/**
 * 
 * @export
 * @interface EndAppAvailabilityPreOrderCreateRequest
 */
export interface EndAppAvailabilityPreOrderCreateRequest {
    /**
     * 
     * @type {EndAppAvailabilityPreOrderCreateRequestData}
     * @memberof EndAppAvailabilityPreOrderCreateRequest
     */
    data: EndAppAvailabilityPreOrderCreateRequestData;
}

/**
 * Check if a given object implements the EndAppAvailabilityPreOrderCreateRequest interface.
 */
export function instanceOfEndAppAvailabilityPreOrderCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function EndAppAvailabilityPreOrderCreateRequestFromJSON(json: any): EndAppAvailabilityPreOrderCreateRequest {
    return EndAppAvailabilityPreOrderCreateRequestFromJSONTyped(json, false);
}

export function EndAppAvailabilityPreOrderCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndAppAvailabilityPreOrderCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': EndAppAvailabilityPreOrderCreateRequestDataFromJSON(json['data']),
    };
}

export function EndAppAvailabilityPreOrderCreateRequestToJSON(value?: EndAppAvailabilityPreOrderCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': EndAppAvailabilityPreOrderCreateRequestDataToJSON(value.data),
    };
}
