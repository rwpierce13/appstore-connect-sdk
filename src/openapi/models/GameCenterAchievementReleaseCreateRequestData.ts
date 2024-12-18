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
import type { GameCenterAchievementReleaseCreateRequestDataRelationships } from './GameCenterAchievementReleaseCreateRequestDataRelationships';
import {
    GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSON,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSON,
} from './GameCenterAchievementReleaseCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseCreateRequestData
 */
export interface GameCenterAchievementReleaseCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementReleaseCreateRequestData
     */
    type: GameCenterAchievementReleaseCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterAchievementReleaseCreateRequestDataRelationships}
     * @memberof GameCenterAchievementReleaseCreateRequestData
     */
    relationships: GameCenterAchievementReleaseCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterAchievementReleaseCreateRequestDataTypeEnum = {
    GameCenterAchievementReleases: 'gameCenterAchievementReleases'
} as const;
export type GameCenterAchievementReleaseCreateRequestDataTypeEnum = typeof GameCenterAchievementReleaseCreateRequestDataTypeEnum[keyof typeof GameCenterAchievementReleaseCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequestData interface.
 */
export function instanceOfGameCenterAchievementReleaseCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterAchievementReleaseCreateRequestDataFromJSON(json: any): GameCenterAchievementReleaseCreateRequestData {
    return GameCenterAchievementReleaseCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterAchievementReleaseCreateRequestDataToJSON(value?: GameCenterAchievementReleaseCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
