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
import type { GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPoints } from './GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPoints';
import {
    GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsFromJSON,
    GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsFromJSONTyped,
    GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsToJSON,
} from './GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPoints';
import type { GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions } from './GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions';
import {
    GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSON,
    GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped,
    GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsToJSON,
} from './GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner
 */
export interface GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner {
    /**
     * 
     * @type {GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPoints}
     * @memberof GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner
     */
    dataPoints?: GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPoints;
    /**
     * 
     * @type {GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions}
     * @memberof GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner
     */
    dimensions?: GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner
     */
    granularity?: GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerGranularityEnum;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerGranularityEnum = typeof GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerGranularityEnum[keyof typeof GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerGranularityEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner interface.
 */
export function instanceOfGameCenterMatchmakingRuleErrorsV1MetricResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerFromJSON(json: any): GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner {
    return GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataPoints': !exists(json, 'dataPoints') ? undefined : GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsFromJSON(json['dataPoints']),
        'dimensions': !exists(json, 'dimensions') ? undefined : GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSON(json['dimensions']),
        'granularity': !exists(json, 'granularity') ? undefined : json['granularity'],
    };
}

export function GameCenterMatchmakingRuleErrorsV1MetricResponseDataInnerToJSON(value?: GameCenterMatchmakingRuleErrorsV1MetricResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataPoints': GameCenterMatchmakingBooleanRuleResultsV1MetricResponseDataInnerDataPointsToJSON(value.dataPoints),
        'dimensions': GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsToJSON(value.dimensions),
        'granularity': value.granularity,
    };
}

