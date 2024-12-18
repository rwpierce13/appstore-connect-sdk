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
import type { GameCenterMatchmakingQueueRelationshipsRuleSetData } from './GameCenterMatchmakingQueueRelationshipsRuleSetData';
import {
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON,
} from './GameCenterMatchmakingQueueRelationshipsRuleSetData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueRelationshipsRuleSet
 */
export interface GameCenterMatchmakingQueueRelationshipsRuleSet {
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationshipsRuleSetData}
     * @memberof GameCenterMatchmakingQueueRelationshipsRuleSet
     */
    data?: GameCenterMatchmakingQueueRelationshipsRuleSetData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueRelationshipsRuleSet interface.
 */
export function instanceOfGameCenterMatchmakingQueueRelationshipsRuleSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON(json: any): GameCenterMatchmakingQueueRelationshipsRuleSet {
    return GameCenterMatchmakingQueueRelationshipsRuleSetFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRelationshipsRuleSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingQueueRelationshipsRuleSetToJSON(value?: GameCenterMatchmakingQueueRelationshipsRuleSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON(value.data),
    };
}

