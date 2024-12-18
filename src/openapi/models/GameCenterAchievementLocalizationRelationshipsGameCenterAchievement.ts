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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievement
 */
export interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievement
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievement
     */
    data?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData;
}

/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationshipsGameCenterAchievement interface.
 */
export function instanceOfGameCenterAchievementLocalizationRelationshipsGameCenterAchievement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    return GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationshipsGameCenterAchievement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON(value?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON(value.data),
    };
}

