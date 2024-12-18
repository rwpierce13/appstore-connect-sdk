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
import type { GameCenterLeaderboardAttributes } from './GameCenterLeaderboardAttributes';
import {
    GameCenterLeaderboardAttributesFromJSON,
    GameCenterLeaderboardAttributesFromJSONTyped,
    GameCenterLeaderboardAttributesToJSON,
} from './GameCenterLeaderboardAttributes';
import type { GameCenterLeaderboardRelationships } from './GameCenterLeaderboardRelationships';
import {
    GameCenterLeaderboardRelationshipsFromJSON,
    GameCenterLeaderboardRelationshipsFromJSONTyped,
    GameCenterLeaderboardRelationshipsToJSON,
} from './GameCenterLeaderboardRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboard
 */
export interface GameCenterLeaderboard {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboard
     */
    type: GameCenterLeaderboardTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboard
     */
    id: string;
    /**
     * 
     * @type {GameCenterLeaderboardAttributes}
     * @memberof GameCenterLeaderboard
     */
    attributes?: GameCenterLeaderboardAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardRelationships}
     * @memberof GameCenterLeaderboard
     */
    relationships?: GameCenterLeaderboardRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboard
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardTypeEnum = {
    GameCenterLeaderboards: 'gameCenterLeaderboards'
} as const;
export type GameCenterLeaderboardTypeEnum = typeof GameCenterLeaderboardTypeEnum[keyof typeof GameCenterLeaderboardTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboard interface.
 */
export function instanceOfGameCenterLeaderboard(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardFromJSON(json: any): GameCenterLeaderboard {
    return GameCenterLeaderboardFromJSONTyped(json, false);
}

export function GameCenterLeaderboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterLeaderboardAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterLeaderboardRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardToJSON(value?: GameCenterLeaderboard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterLeaderboardAttributesToJSON(value.attributes),
        'relationships': GameCenterLeaderboardRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

