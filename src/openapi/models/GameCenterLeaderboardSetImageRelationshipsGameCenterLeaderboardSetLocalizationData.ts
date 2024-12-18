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
 * @interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData
 */
export interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData
     */
    type: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum = {
    GameCenterLeaderboardSetLocalizations: 'gameCenterLeaderboardSetLocalizations'
} as const;
export type GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum = typeof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum[keyof typeof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData interface.
 */
export function instanceOfGameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON(json: any): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    return GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON(value?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData | null): any {
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

