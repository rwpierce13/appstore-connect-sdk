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
 * @interface GameCenterMatchmakingTeamUpdateRequestData
 */
export interface GameCenterMatchmakingTeamUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeamUpdateRequestData
     */
    type: GameCenterMatchmakingTeamUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeamUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetUpdateRequestDataAttributes}
     * @memberof GameCenterMatchmakingTeamUpdateRequestData
     */
    attributes?: GameCenterMatchmakingRuleSetUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterMatchmakingTeamUpdateRequestDataTypeEnum = {
    GameCenterMatchmakingTeams: 'gameCenterMatchmakingTeams'
} as const;
export type GameCenterMatchmakingTeamUpdateRequestDataTypeEnum = typeof GameCenterMatchmakingTeamUpdateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingTeamUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTeamUpdateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingTeamUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingTeamUpdateRequestDataFromJSON(json: any): GameCenterMatchmakingTeamUpdateRequestData {
    return GameCenterMatchmakingTeamUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterMatchmakingTeamUpdateRequestDataToJSON(value?: GameCenterMatchmakingTeamUpdateRequestData | null): any {
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

