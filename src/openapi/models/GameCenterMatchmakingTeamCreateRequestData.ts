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
import type { GameCenterMatchmakingRuleCreateRequestDataRelationships } from './GameCenterMatchmakingRuleCreateRequestDataRelationships';
import {
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON,
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON,
} from './GameCenterMatchmakingRuleCreateRequestDataRelationships';
import type { GameCenterMatchmakingTeamCreateRequestDataAttributes } from './GameCenterMatchmakingTeamCreateRequestDataAttributes';
import {
    GameCenterMatchmakingTeamCreateRequestDataAttributesFromJSON,
    GameCenterMatchmakingTeamCreateRequestDataAttributesFromJSONTyped,
    GameCenterMatchmakingTeamCreateRequestDataAttributesToJSON,
} from './GameCenterMatchmakingTeamCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTeamCreateRequestData
 */
export interface GameCenterMatchmakingTeamCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeamCreateRequestData
     */
    type: GameCenterMatchmakingTeamCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterMatchmakingTeamCreateRequestDataAttributes}
     * @memberof GameCenterMatchmakingTeamCreateRequestData
     */
    attributes: GameCenterMatchmakingTeamCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingRuleCreateRequestDataRelationships}
     * @memberof GameCenterMatchmakingTeamCreateRequestData
     */
    relationships: GameCenterMatchmakingRuleCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingTeamCreateRequestDataTypeEnum = {
    GameCenterMatchmakingTeams: 'gameCenterMatchmakingTeams'
} as const;
export type GameCenterMatchmakingTeamCreateRequestDataTypeEnum = typeof GameCenterMatchmakingTeamCreateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingTeamCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTeamCreateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingTeamCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterMatchmakingTeamCreateRequestDataFromJSON(json: any): GameCenterMatchmakingTeamCreateRequestData {
    return GameCenterMatchmakingTeamCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterMatchmakingTeamCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingTeamCreateRequestDataToJSON(value?: GameCenterMatchmakingTeamCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': GameCenterMatchmakingTeamCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
