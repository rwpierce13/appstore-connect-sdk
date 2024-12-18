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
import type { AppCategory } from './AppCategory';
import {
    AppCategoryFromJSON,
    AppCategoryFromJSONTyped,
    AppCategoryToJSON,
} from './AppCategory';
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
 * @interface AppCategoriesWithoutIncludesResponse
 */
export interface AppCategoriesWithoutIncludesResponse {
    /**
     * 
     * @type {Array<AppCategory>}
     * @memberof AppCategoriesWithoutIncludesResponse
     */
    data: Array<AppCategory>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCategoriesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCategoriesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCategoriesWithoutIncludesResponse interface.
 */
export function instanceOfAppCategoriesWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCategoriesWithoutIncludesResponseFromJSON(json: any): AppCategoriesWithoutIncludesResponse {
    return AppCategoriesWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppCategoriesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoriesWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCategoryFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCategoriesWithoutIncludesResponseToJSON(value?: AppCategoriesWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppCategoryToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

