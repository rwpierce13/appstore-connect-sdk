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
import type { AppCategoryRelationshipsSubcategoriesDataInner } from './AppCategoryRelationshipsSubcategoriesDataInner';
import {
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSON,
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesDataInnerToJSON,
} from './AppCategoryRelationshipsSubcategoriesDataInner';
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import {
    AppCategoryRelationshipsSubcategoriesLinksFromJSON,
    AppCategoryRelationshipsSubcategoriesLinksFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesLinksToJSON,
} from './AppCategoryRelationshipsSubcategoriesLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppCategoryRelationshipsSubcategories
 */
export interface AppCategoryRelationshipsSubcategories {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppCategoryRelationshipsSubcategories
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCategoryRelationshipsSubcategories
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppCategoryRelationshipsSubcategoriesDataInner>}
     * @memberof AppCategoryRelationshipsSubcategories
     */
    data?: Array<AppCategoryRelationshipsSubcategoriesDataInner>;
}

/**
 * Check if a given object implements the AppCategoryRelationshipsSubcategories interface.
 */
export function instanceOfAppCategoryRelationshipsSubcategories(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCategoryRelationshipsSubcategoriesFromJSON(json: any): AppCategoryRelationshipsSubcategories {
    return AppCategoryRelationshipsSubcategoriesFromJSONTyped(json, false);
}

export function AppCategoryRelationshipsSubcategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationshipsSubcategories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppCategoryRelationshipsSubcategoriesDataInnerFromJSON)),
    };
}

export function AppCategoryRelationshipsSubcategoriesToJSON(value?: AppCategoryRelationshipsSubcategories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppCategoryRelationshipsSubcategoriesDataInnerToJSON)),
    };
}
