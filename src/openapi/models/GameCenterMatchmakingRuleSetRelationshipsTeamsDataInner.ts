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
 * @interface GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner
 */
export interface GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner
     */
    type: GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerTypeEnum = {
    GameCenterMatchmakingTeams: 'gameCenterMatchmakingTeams'
} as const;
export type GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerTypeEnum = typeof GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerTypeEnum[keyof typeof GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetRelationshipsTeamsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerFromJSON(json: any): GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner {
    return GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterMatchmakingRuleSetRelationshipsTeamsDataInnerToJSON(value?: GameCenterMatchmakingRuleSetRelationshipsTeamsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}
