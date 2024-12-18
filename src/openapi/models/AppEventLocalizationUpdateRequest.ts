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
import type { AppEventLocalizationUpdateRequestData } from './AppEventLocalizationUpdateRequestData';
import {
    AppEventLocalizationUpdateRequestDataFromJSON,
    AppEventLocalizationUpdateRequestDataFromJSONTyped,
    AppEventLocalizationUpdateRequestDataToJSON,
} from './AppEventLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface AppEventLocalizationUpdateRequest
 */
export interface AppEventLocalizationUpdateRequest {
    /**
     * 
     * @type {AppEventLocalizationUpdateRequestData}
     * @memberof AppEventLocalizationUpdateRequest
     */
    data: AppEventLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the AppEventLocalizationUpdateRequest interface.
 */
export function instanceOfAppEventLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEventLocalizationUpdateRequestFromJSON(json: any): AppEventLocalizationUpdateRequest {
    return AppEventLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function AppEventLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppEventLocalizationUpdateRequestToJSON(value?: AppEventLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventLocalizationUpdateRequestDataToJSON(value.data),
    };
}

