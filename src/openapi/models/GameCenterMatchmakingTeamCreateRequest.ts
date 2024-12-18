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
import type { GameCenterMatchmakingTeamCreateRequestData } from './GameCenterMatchmakingTeamCreateRequestData';
import {
    GameCenterMatchmakingTeamCreateRequestDataFromJSON,
    GameCenterMatchmakingTeamCreateRequestDataFromJSONTyped,
    GameCenterMatchmakingTeamCreateRequestDataToJSON,
} from './GameCenterMatchmakingTeamCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTeamCreateRequest
 */
export interface GameCenterMatchmakingTeamCreateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingTeamCreateRequestData}
     * @memberof GameCenterMatchmakingTeamCreateRequest
     */
    data: GameCenterMatchmakingTeamCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamCreateRequest interface.
 */
export function instanceOfGameCenterMatchmakingTeamCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterMatchmakingTeamCreateRequestFromJSON(json: any): GameCenterMatchmakingTeamCreateRequest {
    return GameCenterMatchmakingTeamCreateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingTeamCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingTeamCreateRequestToJSON(value?: GameCenterMatchmakingTeamCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingTeamCreateRequestDataToJSON(value.data),
    };
}

