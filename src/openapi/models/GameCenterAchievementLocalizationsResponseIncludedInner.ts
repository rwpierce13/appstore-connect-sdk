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
    GameCenterAchievementImage,
    instanceOfGameCenterAchievementImage,
    GameCenterAchievementImageFromJSON,
    GameCenterAchievementImageFromJSONTyped,
    GameCenterAchievementImageToJSON,
} from './GameCenterAchievementImage';

/**
 * @type GameCenterAchievementLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterAchievementLocalizationsResponseIncludedInner = GameCenterAchievement | GameCenterAchievementImage;

export function GameCenterAchievementLocalizationsResponseIncludedInnerFromJSON(json: any): GameCenterAchievementLocalizationsResponseIncludedInner {
    return GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...GameCenterAchievementFromJSONTyped(json, true), ...GameCenterAchievementImageFromJSONTyped(json, true) };
}

export function GameCenterAchievementLocalizationsResponseIncludedInnerToJSON(value?: GameCenterAchievementLocalizationsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfGameCenterAchievement(value)) {
        return GameCenterAchievementToJSON(value as GameCenterAchievement);
    }
    if (instanceOfGameCenterAchievementImage(value)) {
        return GameCenterAchievementImageToJSON(value as GameCenterAchievementImage);
    }

    return {};
}

