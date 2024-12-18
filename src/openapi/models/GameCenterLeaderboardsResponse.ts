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
import type { GameCenterLeaderboard } from './GameCenterLeaderboard';
import {
    GameCenterLeaderboardFromJSON,
    GameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardToJSON,
} from './GameCenterLeaderboard';
import type { GameCenterLeaderboardsResponseIncludedInner } from './GameCenterLeaderboardsResponseIncludedInner';
import {
    GameCenterLeaderboardsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardsResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardsResponse
 */
export interface GameCenterLeaderboardsResponse {
    /**
     * 
     * @type {Array<GameCenterLeaderboard>}
     * @memberof GameCenterLeaderboardsResponse
     */
    data: Array<GameCenterLeaderboard>;
    /**
     * 
     * @type {Array<GameCenterLeaderboardsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardsResponse
     */
    included?: Array<GameCenterLeaderboardsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardsResponse interface.
 */
export function instanceOfGameCenterLeaderboardsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardsResponseFromJSON(json: any): GameCenterLeaderboardsResponse {
    return GameCenterLeaderboardsResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterLeaderboardFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardsResponseToJSON(value?: GameCenterLeaderboardsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterLeaderboardToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
