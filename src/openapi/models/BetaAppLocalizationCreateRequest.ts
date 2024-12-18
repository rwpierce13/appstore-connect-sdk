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
import type { BetaAppLocalizationCreateRequestData } from './BetaAppLocalizationCreateRequestData';
import {
    BetaAppLocalizationCreateRequestDataFromJSON,
    BetaAppLocalizationCreateRequestDataFromJSONTyped,
    BetaAppLocalizationCreateRequestDataToJSON,
} from './BetaAppLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface BetaAppLocalizationCreateRequest
 */
export interface BetaAppLocalizationCreateRequest {
    /**
     * 
     * @type {BetaAppLocalizationCreateRequestData}
     * @memberof BetaAppLocalizationCreateRequest
     */
    data: BetaAppLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the BetaAppLocalizationCreateRequest interface.
 */
export function instanceOfBetaAppLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppLocalizationCreateRequestFromJSON(json: any): BetaAppLocalizationCreateRequest {
    return BetaAppLocalizationCreateRequestFromJSONTyped(json, false);
}

export function BetaAppLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppLocalizationCreateRequestToJSON(value?: BetaAppLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppLocalizationCreateRequestDataToJSON(value.data),
    };
}

