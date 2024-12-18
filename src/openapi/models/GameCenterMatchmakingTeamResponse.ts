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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { GameCenterMatchmakingTeam } from './GameCenterMatchmakingTeam';
import {
    GameCenterMatchmakingTeamFromJSON,
    GameCenterMatchmakingTeamFromJSONTyped,
    GameCenterMatchmakingTeamToJSON,
} from './GameCenterMatchmakingTeam';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTeamResponse
 */
export interface GameCenterMatchmakingTeamResponse {
    /**
     * 
     * @type {GameCenterMatchmakingTeam}
     * @memberof GameCenterMatchmakingTeamResponse
     */
    data: GameCenterMatchmakingTeam;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterMatchmakingTeamResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamResponse interface.
 */
export function instanceOfGameCenterMatchmakingTeamResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingTeamResponseFromJSON(json: any): GameCenterMatchmakingTeamResponse {
    return GameCenterMatchmakingTeamResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingTeamFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingTeamResponseToJSON(value?: GameCenterMatchmakingTeamResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingTeamToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

