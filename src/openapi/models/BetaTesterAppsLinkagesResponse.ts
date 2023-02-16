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
import type { AppClipRelationshipsAppData } from './AppClipRelationshipsAppData';
import {
    AppClipRelationshipsAppDataFromJSON,
    AppClipRelationshipsAppDataFromJSONTyped,
    AppClipRelationshipsAppDataToJSON,
} from './AppClipRelationshipsAppData';
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
 * @interface BetaTesterAppsLinkagesResponse
 */
export interface BetaTesterAppsLinkagesResponse {
    /**
     * 
     * @type {Array<AppClipRelationshipsAppData>}
     * @memberof BetaTesterAppsLinkagesResponse
     */
    data: Array<AppClipRelationshipsAppData>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTesterAppsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTesterAppsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTesterAppsLinkagesResponse interface.
 */
export function instanceOfBetaTesterAppsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaTesterAppsLinkagesResponseFromJSON(json: any): BetaTesterAppsLinkagesResponse {
    return BetaTesterAppsLinkagesResponseFromJSONTyped(json, false);
}

export function BetaTesterAppsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterAppsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppClipRelationshipsAppDataFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTesterAppsLinkagesResponseToJSON(value?: BetaTesterAppsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppClipRelationshipsAppDataToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
