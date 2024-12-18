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
import type { GameCenterMatchmakingRuleAttributes } from './GameCenterMatchmakingRuleAttributes';
import {
    GameCenterMatchmakingRuleAttributesFromJSON,
    GameCenterMatchmakingRuleAttributesFromJSONTyped,
    GameCenterMatchmakingRuleAttributesToJSON,
} from './GameCenterMatchmakingRuleAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRule
 */
export interface GameCenterMatchmakingRule {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRule
     */
    type: GameCenterMatchmakingRuleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRule
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingRuleAttributes}
     * @memberof GameCenterMatchmakingRule
     */
    attributes?: GameCenterMatchmakingRuleAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingRule
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleTypeEnum = {
    GameCenterMatchmakingRules: 'gameCenterMatchmakingRules'
} as const;
export type GameCenterMatchmakingRuleTypeEnum = typeof GameCenterMatchmakingRuleTypeEnum[keyof typeof GameCenterMatchmakingRuleTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRule interface.
 */
export function instanceOfGameCenterMatchmakingRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleFromJSON(json: any): GameCenterMatchmakingRule {
    return GameCenterMatchmakingRuleFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterMatchmakingRuleAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingRuleToJSON(value?: GameCenterMatchmakingRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingRuleAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}
