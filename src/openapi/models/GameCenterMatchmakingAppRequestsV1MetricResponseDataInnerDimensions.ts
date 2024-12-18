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
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult } from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult';
import {
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSON,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSONTyped,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSON,
} from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions
 */
export interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions {
    /**
     * 
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions
     */
    result?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult;
}

/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions interface.
 */
export function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSON(json: any): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSON(json['result']),
    };
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsToJSON(value?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSON(value.result),
    };
}

