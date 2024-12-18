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
import type { GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues } from './GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues';
import {
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON,
} from './GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
 */
export interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    /**
     * 
     * @type {Date}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     * 
     * @type {GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    values?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues;
}

/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints interface.
 */
export function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'values': !exists(json, 'values') ? undefined : GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON(json['values']),
    };
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSON(value?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': value.start === undefined ? undefined : (value.start.toISOString()),
        'end': value.end === undefined ? undefined : (value.end.toISOString()),
        'values': GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON(value.values),
    };
}

