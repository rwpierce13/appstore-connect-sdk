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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { GameCenterLeaderboardSetImageCreateRequestDataRelationships } from './GameCenterLeaderboardSetImageCreateRequestDataRelationships';
import {
    GameCenterLeaderboardSetImageCreateRequestDataRelationshipsFromJSON,
    GameCenterLeaderboardSetImageCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetImageCreateRequestDataRelationshipsToJSON,
} from './GameCenterLeaderboardSetImageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageCreateRequestData
 */
export interface GameCenterLeaderboardSetImageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageCreateRequestData
     */
    type: GameCenterLeaderboardSetImageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetImageCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetImageCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetImageCreateRequestData
     */
    relationships: GameCenterLeaderboardSetImageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetImageCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSetImages: 'gameCenterLeaderboardSetImages'
} as const;
export type GameCenterLeaderboardSetImageCreateRequestDataTypeEnum = typeof GameCenterLeaderboardSetImageCreateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetImageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetImageCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetImageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetImageCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetImageCreateRequestData {
    return GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': GameCenterLeaderboardSetImageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterLeaderboardSetImageCreateRequestDataToJSON(value?: GameCenterLeaderboardSetImageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': GameCenterLeaderboardSetImageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
