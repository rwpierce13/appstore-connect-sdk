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
import type { GameCenterMatchmakingRuleSetUpdateRequestDataAttributes } from './GameCenterMatchmakingRuleSetUpdateRequestDataAttributes';
import {
    GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSON,
    GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSONTyped,
    GameCenterMatchmakingRuleSetUpdateRequestDataAttributesToJSON,
} from './GameCenterMatchmakingRuleSetUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetUpdateRequestData
 */
export interface GameCenterMatchmakingRuleSetUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetUpdateRequestData
     */
    type: GameCenterMatchmakingRuleSetUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetUpdateRequestDataAttributes}
     * @memberof GameCenterMatchmakingRuleSetUpdateRequestData
     */
    attributes?: GameCenterMatchmakingRuleSetUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetUpdateRequestDataTypeEnum = {
    GameCenterMatchmakingRuleSets: 'gameCenterMatchmakingRuleSets'
} as const;
export type GameCenterMatchmakingRuleSetUpdateRequestDataTypeEnum = typeof GameCenterMatchmakingRuleSetUpdateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingRuleSetUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetUpdateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetUpdateRequestDataFromJSON(json: any): GameCenterMatchmakingRuleSetUpdateRequestData {
    return GameCenterMatchmakingRuleSetUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterMatchmakingRuleSetUpdateRequestDataToJSON(value?: GameCenterMatchmakingRuleSetUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingRuleSetUpdateRequestDataAttributesToJSON(value.attributes),
    };
}
