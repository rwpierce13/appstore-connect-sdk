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
import type { GameCenterMatchmakingQueueCreateRequestData } from './GameCenterMatchmakingQueueCreateRequestData';
import {
    GameCenterMatchmakingQueueCreateRequestDataFromJSON,
    GameCenterMatchmakingQueueCreateRequestDataFromJSONTyped,
    GameCenterMatchmakingQueueCreateRequestDataToJSON,
} from './GameCenterMatchmakingQueueCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequest
 */
export interface GameCenterMatchmakingQueueCreateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestData}
     * @memberof GameCenterMatchmakingQueueCreateRequest
     */
    data: GameCenterMatchmakingQueueCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequest interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueCreateRequestFromJSON(json: any): GameCenterMatchmakingQueueCreateRequest {
    return GameCenterMatchmakingQueueCreateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingQueueCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingQueueCreateRequestToJSON(value?: GameCenterMatchmakingQueueCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingQueueCreateRequestDataToJSON(value.data),
    };
}
