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
import type { GameCenterAchievementReleaseRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON,
} from './GameCenterAchievementReleaseRelationshipsGameCenterDetail';
import type { GameCenterDetailRelationshipsDefaultLeaderboard } from './GameCenterDetailRelationshipsDefaultLeaderboard';
import {
    GameCenterDetailRelationshipsDefaultLeaderboardFromJSON,
    GameCenterDetailRelationshipsDefaultLeaderboardFromJSONTyped,
    GameCenterDetailRelationshipsDefaultLeaderboardToJSON,
} from './GameCenterDetailRelationshipsDefaultLeaderboard';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardReleaseRelationships
 */
export interface GameCenterLeaderboardReleaseRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardReleaseRelationships
     */
    gameCenterDetail?: GameCenterAchievementReleaseRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterLeaderboardReleaseRelationships
     */
    gameCenterLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
}

/**
 * Check if a given object implements the GameCenterLeaderboardReleaseRelationships interface.
 */
export function instanceOfGameCenterLeaderboardReleaseRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardReleaseRelationshipsFromJSON(json: any): GameCenterLeaderboardReleaseRelationships {
    return GameCenterLeaderboardReleaseRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleaseRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterDetail': !exists(json, 'gameCenterDetail') ? undefined : GameCenterAchievementReleaseRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterLeaderboard': !exists(json, 'gameCenterLeaderboard') ? undefined : GameCenterDetailRelationshipsDefaultLeaderboardFromJSON(json['gameCenterLeaderboard']),
    };
}

export function GameCenterLeaderboardReleaseRelationshipsToJSON(value?: GameCenterLeaderboardReleaseRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseRelationshipsGameCenterDetailToJSON(value.gameCenterDetail),
        'gameCenterLeaderboard': GameCenterDetailRelationshipsDefaultLeaderboardToJSON(value.gameCenterLeaderboard),
    };
}

