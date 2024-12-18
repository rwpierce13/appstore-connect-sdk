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
import type { GameCenterAchievementLocalizationUpdateRequestData } from './GameCenterAchievementLocalizationUpdateRequestData';
import {
    GameCenterAchievementLocalizationUpdateRequestDataFromJSON,
    GameCenterAchievementLocalizationUpdateRequestDataFromJSONTyped,
    GameCenterAchievementLocalizationUpdateRequestDataToJSON,
} from './GameCenterAchievementLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationUpdateRequest
 */
export interface GameCenterAchievementLocalizationUpdateRequest {
    /**
     * 
     * @type {GameCenterAchievementLocalizationUpdateRequestData}
     * @memberof GameCenterAchievementLocalizationUpdateRequest
     */
    data: GameCenterAchievementLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationUpdateRequest interface.
 */
export function instanceOfGameCenterAchievementLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterAchievementLocalizationUpdateRequestFromJSON(json: any): GameCenterAchievementLocalizationUpdateRequest {
    return GameCenterAchievementLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementLocalizationUpdateRequestToJSON(value?: GameCenterAchievementLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterAchievementLocalizationUpdateRequestDataToJSON(value.data),
    };
}

