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
/**
 * 
 * @export
 * @interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
 */
export interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues {
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    averagePlayerCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    p50PlayerCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    p95PlayerCount?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues interface.
 */
export function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'averagePlayerCount': !exists(json, 'averagePlayerCount') ? undefined : json['averagePlayerCount'],
        'p50PlayerCount': !exists(json, 'p50PlayerCount') ? undefined : json['p50PlayerCount'],
        'p95PlayerCount': !exists(json, 'p95PlayerCount') ? undefined : json['p95PlayerCount'],
    };
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON(value?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'averagePlayerCount': value.averagePlayerCount,
        'p50PlayerCount': value.p50PlayerCount,
        'p95PlayerCount': value.p95PlayerCount,
    };
}

