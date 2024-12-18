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
import type { GameCenterMatchmakingQueueRelationships } from './GameCenterMatchmakingQueueRelationships';
import {
    GameCenterMatchmakingQueueRelationshipsFromJSON,
    GameCenterMatchmakingQueueRelationshipsFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsToJSON,
} from './GameCenterMatchmakingQueueRelationships';
import type { GameCenterMatchmakingQueueUpdateRequestDataAttributes } from './GameCenterMatchmakingQueueUpdateRequestDataAttributes';
import {
    GameCenterMatchmakingQueueUpdateRequestDataAttributesFromJSON,
    GameCenterMatchmakingQueueUpdateRequestDataAttributesFromJSONTyped,
    GameCenterMatchmakingQueueUpdateRequestDataAttributesToJSON,
} from './GameCenterMatchmakingQueueUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueUpdateRequestData
 */
export interface GameCenterMatchmakingQueueUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    type: GameCenterMatchmakingQueueUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterMatchmakingQueueUpdateRequestDataAttributes}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    attributes?: GameCenterMatchmakingQueueUpdateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationships}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    relationships?: GameCenterMatchmakingQueueRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingQueueUpdateRequestDataTypeEnum = {
    GameCenterMatchmakingQueues: 'gameCenterMatchmakingQueues'
} as const;
export type GameCenterMatchmakingQueueUpdateRequestDataTypeEnum = typeof GameCenterMatchmakingQueueUpdateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingQueueUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingQueueUpdateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingQueueUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueUpdateRequestDataFromJSON(json: any): GameCenterMatchmakingQueueUpdateRequestData {
    return GameCenterMatchmakingQueueUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterMatchmakingQueueUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterMatchmakingQueueRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingQueueUpdateRequestDataToJSON(value?: GameCenterMatchmakingQueueUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingQueueUpdateRequestDataAttributesToJSON(value.attributes),
        'relationships': GameCenterMatchmakingQueueRelationshipsToJSON(value.relationships),
    };
}

