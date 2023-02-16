/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppScreenshotUpdateRequestData } from './AppScreenshotUpdateRequestData';
import {
    AppScreenshotUpdateRequestDataFromJSON,
    AppScreenshotUpdateRequestDataFromJSONTyped,
    AppScreenshotUpdateRequestDataToJSON,
} from './AppScreenshotUpdateRequestData';

/**
 * 
 * @export
 * @interface AppScreenshotUpdateRequest
 */
export interface AppScreenshotUpdateRequest {
    /**
     * 
     * @type {AppScreenshotUpdateRequestData}
     * @memberof AppScreenshotUpdateRequest
     */
    data: AppScreenshotUpdateRequestData;
}

/**
 * Check if a given object implements the AppScreenshotUpdateRequest interface.
 */
export function instanceOfAppScreenshotUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppScreenshotUpdateRequestFromJSON(json: any): AppScreenshotUpdateRequest {
    return AppScreenshotUpdateRequestFromJSONTyped(json, false);
}

export function AppScreenshotUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppScreenshotUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppScreenshotUpdateRequestToJSON(value?: AppScreenshotUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppScreenshotUpdateRequestDataToJSON(value.data),
    };
}
