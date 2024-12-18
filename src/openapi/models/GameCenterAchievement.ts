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
import type { GameCenterAchievementAttributes } from './GameCenterAchievementAttributes';
import {
    GameCenterAchievementAttributesFromJSON,
    GameCenterAchievementAttributesFromJSONTyped,
    GameCenterAchievementAttributesToJSON,
} from './GameCenterAchievementAttributes';
import type { GameCenterAchievementRelationships } from './GameCenterAchievementRelationships';
import {
    GameCenterAchievementRelationshipsFromJSON,
    GameCenterAchievementRelationshipsFromJSONTyped,
    GameCenterAchievementRelationshipsToJSON,
} from './GameCenterAchievementRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievement
 */
export interface GameCenterAchievement {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievement
     */
    type: GameCenterAchievementTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievement
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementAttributes}
     * @memberof GameCenterAchievement
     */
    attributes?: GameCenterAchievementAttributes;
    /**
     * 
     * @type {GameCenterAchievementRelationships}
     * @memberof GameCenterAchievement
     */
    relationships?: GameCenterAchievementRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterAchievement
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterAchievementTypeEnum = {
    GameCenterAchievements: 'gameCenterAchievements'
} as const;
export type GameCenterAchievementTypeEnum = typeof GameCenterAchievementTypeEnum[keyof typeof GameCenterAchievementTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievement interface.
 */
export function instanceOfGameCenterAchievement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterAchievementFromJSON(json: any): GameCenterAchievement {
    return GameCenterAchievementFromJSONTyped(json, false);
}

export function GameCenterAchievementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterAchievementAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterAchievementRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementToJSON(value?: GameCenterAchievement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterAchievementAttributesToJSON(value.attributes),
        'relationships': GameCenterAchievementRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

