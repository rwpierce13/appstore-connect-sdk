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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets
 */
export interface GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets {
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>}
     * @memberof GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets
     */
    data?: Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>;
}

/**
 * Check if a given object implements the GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets interface.
 */
export function instanceOfGameCenterLeaderboardRelationshipsGameCenterLeaderboardSets(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsFromJSON(json: any): GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets {
    return GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON)),
    };
}

export function GameCenterLeaderboardRelationshipsGameCenterLeaderboardSetsToJSON(value?: GameCenterLeaderboardRelationshipsGameCenterLeaderboardSets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON)),
    };
}

