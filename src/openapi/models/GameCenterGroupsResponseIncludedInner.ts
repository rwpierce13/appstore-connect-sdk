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

import {
    GameCenterAchievement,
    instanceOfGameCenterAchievement,
    GameCenterAchievementFromJSON,
    GameCenterAchievementFromJSONTyped,
    GameCenterAchievementToJSON,
} from './GameCenterAchievement';
import {
    GameCenterDetail,
    instanceOfGameCenterDetail,
    GameCenterDetailFromJSON,
    GameCenterDetailFromJSONTyped,
    GameCenterDetailToJSON,
} from './GameCenterDetail';
import {
    GameCenterLeaderboard,
    instanceOfGameCenterLeaderboard,
    GameCenterLeaderboardFromJSON,
    GameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardToJSON,
} from './GameCenterLeaderboard';
import {
    GameCenterLeaderboardSet,
    instanceOfGameCenterLeaderboardSet,
    GameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetToJSON,
} from './GameCenterLeaderboardSet';

/**
 * @type GameCenterGroupsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterGroupsResponseIncludedInner = GameCenterAchievement | GameCenterDetail | GameCenterLeaderboard | GameCenterLeaderboardSet;

export function GameCenterGroupsResponseIncludedInnerFromJSON(json: any): GameCenterGroupsResponseIncludedInner {
    return GameCenterGroupsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterGroupsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...GameCenterAchievementFromJSONTyped(json, true), ...GameCenterDetailFromJSONTyped(json, true), ...GameCenterLeaderboardFromJSONTyped(json, true), ...GameCenterLeaderboardSetFromJSONTyped(json, true) };
}

export function GameCenterGroupsResponseIncludedInnerToJSON(value?: GameCenterGroupsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfGameCenterAchievement(value)) {
        return GameCenterAchievementToJSON(value as GameCenterAchievement);
    }
    if (instanceOfGameCenterDetail(value)) {
        return GameCenterDetailToJSON(value as GameCenterDetail);
    }
    if (instanceOfGameCenterLeaderboard(value)) {
        return GameCenterLeaderboardToJSON(value as GameCenterLeaderboard);
    }
    if (instanceOfGameCenterLeaderboardSet(value)) {
        return GameCenterLeaderboardSetToJSON(value as GameCenterLeaderboardSet);
    }

    return {};
}
