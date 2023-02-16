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
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import {
    AppCategoryRelationshipsSubcategoriesLinksFromJSON,
    AppCategoryRelationshipsSubcategoriesLinksFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesLinksToJSON,
} from './AppCategoryRelationshipsSubcategoriesLinks';
import type { CiProductRelationshipsPrimaryRepositoriesDataInner } from './CiProductRelationshipsPrimaryRepositoriesDataInner';
import {
    CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON,
    CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped,
    CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON,
} from './CiProductRelationshipsPrimaryRepositoriesDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface CiProductRelationshipsPrimaryRepositories
 */
export interface CiProductRelationshipsPrimaryRepositories {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof CiProductRelationshipsPrimaryRepositories
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiProductRelationshipsPrimaryRepositories
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<CiProductRelationshipsPrimaryRepositoriesDataInner>}
     * @memberof CiProductRelationshipsPrimaryRepositories
     */
    data?: Array<CiProductRelationshipsPrimaryRepositoriesDataInner>;
}

/**
 * Check if a given object implements the CiProductRelationshipsPrimaryRepositories interface.
 */
export function instanceOfCiProductRelationshipsPrimaryRepositories(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiProductRelationshipsPrimaryRepositoriesFromJSON(json: any): CiProductRelationshipsPrimaryRepositories {
    return CiProductRelationshipsPrimaryRepositoriesFromJSONTyped(json, false);
}

export function CiProductRelationshipsPrimaryRepositoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsPrimaryRepositories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON)),
    };
}

export function CiProductRelationshipsPrimaryRepositoriesToJSON(value?: CiProductRelationshipsPrimaryRepositories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON)),
    };
}
