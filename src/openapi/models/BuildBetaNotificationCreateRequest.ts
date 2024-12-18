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
import type { BuildBetaNotificationCreateRequestData } from './BuildBetaNotificationCreateRequestData';
import {
    BuildBetaNotificationCreateRequestDataFromJSON,
    BuildBetaNotificationCreateRequestDataFromJSONTyped,
    BuildBetaNotificationCreateRequestDataToJSON,
} from './BuildBetaNotificationCreateRequestData';

/**
 * 
 * @export
 * @interface BuildBetaNotificationCreateRequest
 */
export interface BuildBetaNotificationCreateRequest {
    /**
     * 
     * @type {BuildBetaNotificationCreateRequestData}
     * @memberof BuildBetaNotificationCreateRequest
     */
    data: BuildBetaNotificationCreateRequestData;
}

/**
 * Check if a given object implements the BuildBetaNotificationCreateRequest interface.
 */
export function instanceOfBuildBetaNotificationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BuildBetaNotificationCreateRequestFromJSON(json: any): BuildBetaNotificationCreateRequest {
    return BuildBetaNotificationCreateRequestFromJSONTyped(json, false);
}

export function BuildBetaNotificationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaNotificationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BuildBetaNotificationCreateRequestDataFromJSON(json['data']),
    };
}

export function BuildBetaNotificationCreateRequestToJSON(value?: BuildBetaNotificationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BuildBetaNotificationCreateRequestDataToJSON(value.data),
    };
}

