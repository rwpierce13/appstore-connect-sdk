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
import type { GameCenterMatchmakingRuleSetTestAttributes } from './GameCenterMatchmakingRuleSetTestAttributes';
import {
    GameCenterMatchmakingRuleSetTestAttributesFromJSON,
    GameCenterMatchmakingRuleSetTestAttributesFromJSONTyped,
    GameCenterMatchmakingRuleSetTestAttributesToJSON,
} from './GameCenterMatchmakingRuleSetTestAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTest
 */
export interface GameCenterMatchmakingRuleSetTest {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetTest
     */
    type: GameCenterMatchmakingRuleSetTestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetTest
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetTestAttributes}
     * @memberof GameCenterMatchmakingRuleSetTest
     */
    attributes?: GameCenterMatchmakingRuleSetTestAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingRuleSetTest
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetTestTypeEnum = {
    GameCenterMatchmakingRuleSetTests: 'gameCenterMatchmakingRuleSetTests'
} as const;
export type GameCenterMatchmakingRuleSetTestTypeEnum = typeof GameCenterMatchmakingRuleSetTestTypeEnum[keyof typeof GameCenterMatchmakingRuleSetTestTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTest interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetTestFromJSON(json: any): GameCenterMatchmakingRuleSetTest {
    return GameCenterMatchmakingRuleSetTestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterMatchmakingRuleSetTestAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingRuleSetTestToJSON(value?: GameCenterMatchmakingRuleSetTest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingRuleSetTestAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

