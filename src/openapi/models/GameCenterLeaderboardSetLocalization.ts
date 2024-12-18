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
import type { GameCenterLeaderboardSetLocalizationAttributes } from './GameCenterLeaderboardSetLocalizationAttributes';
import {
    GameCenterLeaderboardSetLocalizationAttributesFromJSON,
    GameCenterLeaderboardSetLocalizationAttributesFromJSONTyped,
    GameCenterLeaderboardSetLocalizationAttributesToJSON,
} from './GameCenterLeaderboardSetLocalizationAttributes';
import type { GameCenterLeaderboardSetLocalizationRelationships } from './GameCenterLeaderboardSetLocalizationRelationships';
import {
    GameCenterLeaderboardSetLocalizationRelationshipsFromJSON,
    GameCenterLeaderboardSetLocalizationRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetLocalizationRelationshipsToJSON,
} from './GameCenterLeaderboardSetLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetLocalization
 */
export interface GameCenterLeaderboardSetLocalization {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalization
     */
    type: GameCenterLeaderboardSetLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalization
     */
    id: string;
    /**
     * 
     * @type {GameCenterLeaderboardSetLocalizationAttributes}
     * @memberof GameCenterLeaderboardSetLocalization
     */
    attributes?: GameCenterLeaderboardSetLocalizationAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetLocalizationRelationships}
     * @memberof GameCenterLeaderboardSetLocalization
     */
    relationships?: GameCenterLeaderboardSetLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardSetLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetLocalizationTypeEnum = {
    GameCenterLeaderboardSetLocalizations: 'gameCenterLeaderboardSetLocalizations'
} as const;
export type GameCenterLeaderboardSetLocalizationTypeEnum = typeof GameCenterLeaderboardSetLocalizationTypeEnum[keyof typeof GameCenterLeaderboardSetLocalizationTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalization interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationFromJSON(json: any): GameCenterLeaderboardSetLocalization {
    return GameCenterLeaderboardSetLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterLeaderboardSetLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterLeaderboardSetLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetLocalizationToJSON(value?: GameCenterLeaderboardSetLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterLeaderboardSetLocalizationAttributesToJSON(value.attributes),
        'relationships': GameCenterLeaderboardSetLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
