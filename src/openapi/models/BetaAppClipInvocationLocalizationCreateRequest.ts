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
import type { BetaAppClipInvocationLocalizationCreateRequestData } from './BetaAppClipInvocationLocalizationCreateRequestData';
import {
    BetaAppClipInvocationLocalizationCreateRequestDataFromJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped,
    BetaAppClipInvocationLocalizationCreateRequestDataToJSON,
} from './BetaAppClipInvocationLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequest
 */
export interface BetaAppClipInvocationLocalizationCreateRequest {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationCreateRequestData}
     * @memberof BetaAppClipInvocationLocalizationCreateRequest
     */
    data: BetaAppClipInvocationLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequest interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationCreateRequestFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequest {
    return BetaAppClipInvocationLocalizationCreateRequestFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationLocalizationCreateRequestToJSON(value?: BetaAppClipInvocationLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationCreateRequestDataToJSON(value.data),
    };
}

