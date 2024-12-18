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
 * @interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData
 */
export interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData
     */
    type: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum = {
    GameCenterAchievementImages: 'gameCenterAchievementImages'
} as const;
export type GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum = typeof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum[keyof typeof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData interface.
 */
export function instanceOfGameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData {
    return GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataToJSON(value?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData | null): any {
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

