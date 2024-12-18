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
import type { AnalyticsReportRequestCreateRequestData } from './AnalyticsReportRequestCreateRequestData';
import {
    AnalyticsReportRequestCreateRequestDataFromJSON,
    AnalyticsReportRequestCreateRequestDataFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataToJSON,
} from './AnalyticsReportRequestCreateRequestData';

/**
 * 
 * @export
 * @interface AnalyticsReportRequestCreateRequest
 */
export interface AnalyticsReportRequestCreateRequest {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestData}
     * @memberof AnalyticsReportRequestCreateRequest
     */
    data: AnalyticsReportRequestCreateRequestData;
}

/**
 * Check if a given object implements the AnalyticsReportRequestCreateRequest interface.
 */
export function instanceOfAnalyticsReportRequestCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AnalyticsReportRequestCreateRequestFromJSON(json: any): AnalyticsReportRequestCreateRequest {
    return AnalyticsReportRequestCreateRequestFromJSONTyped(json, false);
}

export function AnalyticsReportRequestCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AnalyticsReportRequestCreateRequestDataFromJSON(json['data']),
    };
}

export function AnalyticsReportRequestCreateRequestToJSON(value?: AnalyticsReportRequestCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AnalyticsReportRequestCreateRequestDataToJSON(value.data),
    };
}

