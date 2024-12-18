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
import type { AppScreenshotSetRelationshipsAppScreenshotsDataInner } from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
import {
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON,
} from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
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
 * @interface AppScreenshotSetAppScreenshotsLinkagesResponse
 */
export interface AppScreenshotSetAppScreenshotsLinkagesResponse {
    /**
     * 
     * @type {Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesResponse
     */
    data: Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppScreenshotSetAppScreenshotsLinkagesResponse interface.
 */
export function instanceOfAppScreenshotSetAppScreenshotsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseFromJSON(json: any): AppScreenshotSetAppScreenshotsLinkagesResponse {
    return AppScreenshotSetAppScreenshotsLinkagesResponseFromJSONTyped(json, false);
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetAppScreenshotsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppScreenshotSetAppScreenshotsLinkagesResponseToJSON(value?: AppScreenshotSetAppScreenshotsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

