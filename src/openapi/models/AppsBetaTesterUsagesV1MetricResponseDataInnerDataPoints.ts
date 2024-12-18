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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues } from './AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSON,
} from './AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues';

/**
 * 
 * @export
 * @interface AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
 */
export interface AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    /**
     * 
     * @type {Date}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     * 
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues}
     * @memberof AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints
     */
    values?: AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValues;
}

/**
 * Check if a given object implements the AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints interface.
 */
export function instanceOfAppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsFromJSON(json: any): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    return AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'values': !exists(json, 'values') ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON(json['values']),
    };
}

export function AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsToJSON(value?: AppsBetaTesterUsagesV1MetricResponseDataInnerDataPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': value.start === undefined ? undefined : (value.start.toISOString()),
        'end': value.end === undefined ? undefined : (value.end.toISOString()),
        'values': AppsBetaTesterUsagesV1MetricResponseDataInnerDataPointsValuesToJSON(value.values),
    };
}
