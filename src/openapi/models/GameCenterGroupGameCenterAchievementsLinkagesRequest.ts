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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';

/**
 * 
 * @export
 * @interface GameCenterGroupGameCenterAchievementsLinkagesRequest
 */
export interface GameCenterGroupGameCenterAchievementsLinkagesRequest {
    /**
     * 
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterGroupGameCenterAchievementsLinkagesRequest
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
}

/**
 * Check if a given object implements the GameCenterGroupGameCenterAchievementsLinkagesRequest interface.
 */
export function instanceOfGameCenterGroupGameCenterAchievementsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSON(json: any): GameCenterGroupGameCenterAchievementsLinkagesRequest {
    return GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterAchievementsLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON)),
    };
}

export function GameCenterGroupGameCenterAchievementsLinkagesRequestToJSON(value?: GameCenterGroupGameCenterAchievementsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON)),
    };
}

