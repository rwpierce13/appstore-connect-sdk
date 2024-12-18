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
import type { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData } from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';
import {
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSONTyped,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON,
} from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization
 */
export interface GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization {
    /**
     * 
     * @type {GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData}
     * @memberof GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization
     */
    data?: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization interface.
 */
export function instanceOfGameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSON(json: any): GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization {
    return GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationToJSON(value?: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON(value.data),
    };
}
