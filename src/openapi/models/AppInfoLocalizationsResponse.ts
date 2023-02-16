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
import type { AppInfo } from './AppInfo';
import {
    AppInfoFromJSON,
    AppInfoFromJSONTyped,
    AppInfoToJSON,
} from './AppInfo';
import type { AppInfoLocalization } from './AppInfoLocalization';
import {
    AppInfoLocalizationFromJSON,
    AppInfoLocalizationFromJSONTyped,
    AppInfoLocalizationToJSON,
} from './AppInfoLocalization';
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
 * @interface AppInfoLocalizationsResponse
 */
export interface AppInfoLocalizationsResponse {
    /**
     * 
     * @type {Array<AppInfoLocalization>}
     * @memberof AppInfoLocalizationsResponse
     */
    data: Array<AppInfoLocalization>;
    /**
     * 
     * @type {Array<AppInfo>}
     * @memberof AppInfoLocalizationsResponse
     */
    included?: Array<AppInfo>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppInfoLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppInfoLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppInfoLocalizationsResponse interface.
 */
export function instanceOfAppInfoLocalizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppInfoLocalizationsResponseFromJSON(json: any): AppInfoLocalizationsResponse {
    return AppInfoLocalizationsResponseFromJSONTyped(json, false);
}

export function AppInfoLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppInfoLocalizationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppInfoFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppInfoLocalizationsResponseToJSON(value?: AppInfoLocalizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppInfoLocalizationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppInfoToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
