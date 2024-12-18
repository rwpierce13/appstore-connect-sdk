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
import type { BetaTesterCreateRequestData } from './BetaTesterCreateRequestData';
import {
    BetaTesterCreateRequestDataFromJSON,
    BetaTesterCreateRequestDataFromJSONTyped,
    BetaTesterCreateRequestDataToJSON,
} from './BetaTesterCreateRequestData';

/**
 * 
 * @export
 * @interface BetaTesterCreateRequest
 */
export interface BetaTesterCreateRequest {
    /**
     * 
     * @type {BetaTesterCreateRequestData}
     * @memberof BetaTesterCreateRequest
     */
    data: BetaTesterCreateRequestData;
}

/**
 * Check if a given object implements the BetaTesterCreateRequest interface.
 */
export function instanceOfBetaTesterCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaTesterCreateRequestFromJSON(json: any): BetaTesterCreateRequest {
    return BetaTesterCreateRequestFromJSONTyped(json, false);
}

export function BetaTesterCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaTesterCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaTesterCreateRequestToJSON(value?: BetaTesterCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaTesterCreateRequestDataToJSON(value.data),
    };
}

