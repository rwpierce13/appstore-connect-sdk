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

/**
 * @type GameCenterAchievementReleasesResponseIncludedInner
 * 
 * @export
 */
export type GameCenterAchievementReleasesResponseIncludedInner = GameCenterAchievement | GameCenterDetail;

export function GameCenterAchievementReleasesResponseIncludedInnerFromJSON(json: any): GameCenterAchievementReleasesResponseIncludedInner {
    return GameCenterAchievementReleasesResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterAchievementReleasesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleasesResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...GameCenterAchievementFromJSONTyped(json, true), ...GameCenterDetailFromJSONTyped(json, true) };
}

export function GameCenterAchievementReleasesResponseIncludedInnerToJSON(value?: GameCenterAchievementReleasesResponseIncludedInner | null): any {
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

    return {};
}
