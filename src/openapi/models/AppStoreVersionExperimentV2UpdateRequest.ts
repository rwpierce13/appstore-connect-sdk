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
import type { AppStoreVersionExperimentV2UpdateRequestData } from './AppStoreVersionExperimentV2UpdateRequestData';
import {
    AppStoreVersionExperimentV2UpdateRequestDataFromJSON,
    AppStoreVersionExperimentV2UpdateRequestDataFromJSONTyped,
    AppStoreVersionExperimentV2UpdateRequestDataToJSON,
} from './AppStoreVersionExperimentV2UpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2UpdateRequest
 */
export interface AppStoreVersionExperimentV2UpdateRequest {
    /**
     * 
     * @type {AppStoreVersionExperimentV2UpdateRequestData}
     * @memberof AppStoreVersionExperimentV2UpdateRequest
     */
    data: AppStoreVersionExperimentV2UpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2UpdateRequest interface.
 */
export function instanceOfAppStoreVersionExperimentV2UpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionExperimentV2UpdateRequestFromJSON(json: any): AppStoreVersionExperimentV2UpdateRequest {
    return AppStoreVersionExperimentV2UpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2UpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentV2UpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionExperimentV2UpdateRequestToJSON(value?: AppStoreVersionExperimentV2UpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionExperimentV2UpdateRequestDataToJSON(value.data),
    };
}
