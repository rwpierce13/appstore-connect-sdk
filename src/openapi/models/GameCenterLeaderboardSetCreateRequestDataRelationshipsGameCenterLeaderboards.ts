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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards
 */
export interface GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards
     */
    data?: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards interface.
 */
export function instanceOfGameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSON(json: any): GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    return GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)),
    };
}

export function GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsToJSON(value?: GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)),
    };
}
