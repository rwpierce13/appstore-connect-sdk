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
import type { GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData } from './GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData';
import {
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataFromJSON,
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataFromJSONTyped,
    GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataToJSON,
} from './GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage
 */
export interface GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData}
     * @memberof GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage
     */
    data?: GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageFromJSON(json: any): GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage {
    return GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageToJSON(value?: GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImageDataToJSON(value.data),
    };
}
