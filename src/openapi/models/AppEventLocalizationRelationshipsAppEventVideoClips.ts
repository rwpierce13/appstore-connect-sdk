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
import type { AppEventLocalizationRelationshipsAppEventVideoClipsDataInner } from './AppEventLocalizationRelationshipsAppEventVideoClipsDataInner';
import {
    AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON,
    AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON,
} from './AppEventLocalizationRelationshipsAppEventVideoClipsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppEventLocalizationRelationshipsAppEventVideoClips
 */
export interface AppEventLocalizationRelationshipsAppEventVideoClips {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClips
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClips
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppEventLocalizationRelationshipsAppEventVideoClipsDataInner>}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClips
     */
    data?: Array<AppEventLocalizationRelationshipsAppEventVideoClipsDataInner>;
}

/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventVideoClips interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventVideoClips(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsFromJSON(json: any): AppEventLocalizationRelationshipsAppEventVideoClips {
    return AppEventLocalizationRelationshipsAppEventVideoClipsFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventVideoClips {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON)),
    };
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsToJSON(value?: AppEventLocalizationRelationshipsAppEventVideoClips | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON)),
    };
}
