/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppRelationshipsGameCenterEnabledVersionsDataInner } from './AppRelationshipsGameCenterEnabledVersionsDataInner';
import {
    AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON,
    AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped,
    AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON,
} from './AppRelationshipsGameCenterEnabledVersionsDataInner';
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
 * @interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
 */
export interface GameCenterEnabledVersionCompatibleVersionsLinkagesResponse {
    /**
     * 
     * @type {Array<AppRelationshipsGameCenterEnabledVersionsDataInner>}
     * @memberof GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
     */
    data: Array<AppRelationshipsGameCenterEnabledVersionsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterEnabledVersionCompatibleVersionsLinkagesResponse interface.
 */
export function instanceOfGameCenterEnabledVersionCompatibleVersionsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFromJSON(json: any): GameCenterEnabledVersionCompatibleVersionsLinkagesResponse {
    return GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionCompatibleVersionsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterEnabledVersionCompatibleVersionsLinkagesResponseToJSON(value?: GameCenterEnabledVersionCompatibleVersionsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
