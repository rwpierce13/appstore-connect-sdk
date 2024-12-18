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
import type { GameCenterMatchmakingSessionsV1MetricResponseDataInner } from './GameCenterMatchmakingSessionsV1MetricResponseDataInner';
import {
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSON,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerToJSON,
} from './GameCenterMatchmakingSessionsV1MetricResponseDataInner';
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
 * @interface GameCenterMatchmakingSessionsV1MetricResponse
 */
export interface GameCenterMatchmakingSessionsV1MetricResponse {
    /**
     * 
     * @type {Array<GameCenterMatchmakingSessionsV1MetricResponseDataInner>}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponse
     */
    data: Array<GameCenterMatchmakingSessionsV1MetricResponseDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponse interface.
 */
export function instanceOfGameCenterMatchmakingSessionsV1MetricResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingSessionsV1MetricResponseFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponse {
    return GameCenterMatchmakingSessionsV1MetricResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingSessionsV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterMatchmakingSessionsV1MetricResponseToJSON(value?: GameCenterMatchmakingSessionsV1MetricResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterMatchmakingSessionsV1MetricResponseDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
