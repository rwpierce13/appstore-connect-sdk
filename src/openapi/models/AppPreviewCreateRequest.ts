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
import type { AppPreviewCreateRequestData } from './AppPreviewCreateRequestData';
import {
    AppPreviewCreateRequestDataFromJSON,
    AppPreviewCreateRequestDataFromJSONTyped,
    AppPreviewCreateRequestDataToJSON,
} from './AppPreviewCreateRequestData';

/**
 * 
 * @export
 * @interface AppPreviewCreateRequest
 */
export interface AppPreviewCreateRequest {
    /**
     * 
     * @type {AppPreviewCreateRequestData}
     * @memberof AppPreviewCreateRequest
     */
    data: AppPreviewCreateRequestData;
}

/**
 * Check if a given object implements the AppPreviewCreateRequest interface.
 */
export function instanceOfAppPreviewCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPreviewCreateRequestFromJSON(json: any): AppPreviewCreateRequest {
    return AppPreviewCreateRequestFromJSONTyped(json, false);
}

export function AppPreviewCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPreviewCreateRequestDataFromJSON(json['data']),
    };
}

export function AppPreviewCreateRequestToJSON(value?: AppPreviewCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPreviewCreateRequestDataToJSON(value.data),
    };
}

