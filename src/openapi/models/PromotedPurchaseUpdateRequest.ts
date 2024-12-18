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
import type { PromotedPurchaseUpdateRequestData } from './PromotedPurchaseUpdateRequestData';
import {
    PromotedPurchaseUpdateRequestDataFromJSON,
    PromotedPurchaseUpdateRequestDataFromJSONTyped,
    PromotedPurchaseUpdateRequestDataToJSON,
} from './PromotedPurchaseUpdateRequestData';

/**
 * 
 * @export
 * @interface PromotedPurchaseUpdateRequest
 */
export interface PromotedPurchaseUpdateRequest {
    /**
     * 
     * @type {PromotedPurchaseUpdateRequestData}
     * @memberof PromotedPurchaseUpdateRequest
     */
    data: PromotedPurchaseUpdateRequestData;
}

/**
 * Check if a given object implements the PromotedPurchaseUpdateRequest interface.
 */
export function instanceOfPromotedPurchaseUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PromotedPurchaseUpdateRequestFromJSON(json: any): PromotedPurchaseUpdateRequest {
    return PromotedPurchaseUpdateRequestFromJSONTyped(json, false);
}

export function PromotedPurchaseUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseUpdateRequestDataFromJSON(json['data']),
    };
}

export function PromotedPurchaseUpdateRequestToJSON(value?: PromotedPurchaseUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PromotedPurchaseUpdateRequestDataToJSON(value.data),
    };
}

