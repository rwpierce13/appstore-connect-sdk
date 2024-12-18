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
import type { InAppPurchaseAvailabilityCreateRequestData } from './InAppPurchaseAvailabilityCreateRequestData';
import {
    InAppPurchaseAvailabilityCreateRequestDataFromJSON,
    InAppPurchaseAvailabilityCreateRequestDataFromJSONTyped,
    InAppPurchaseAvailabilityCreateRequestDataToJSON,
} from './InAppPurchaseAvailabilityCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseAvailabilityCreateRequest
 */
export interface InAppPurchaseAvailabilityCreateRequest {
    /**
     * 
     * @type {InAppPurchaseAvailabilityCreateRequestData}
     * @memberof InAppPurchaseAvailabilityCreateRequest
     */
    data: InAppPurchaseAvailabilityCreateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseAvailabilityCreateRequest interface.
 */
export function instanceOfInAppPurchaseAvailabilityCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseAvailabilityCreateRequestFromJSON(json: any): InAppPurchaseAvailabilityCreateRequest {
    return InAppPurchaseAvailabilityCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseAvailabilityCreateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseAvailabilityCreateRequestToJSON(value?: InAppPurchaseAvailabilityCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseAvailabilityCreateRequestDataToJSON(value.data),
    };
}

