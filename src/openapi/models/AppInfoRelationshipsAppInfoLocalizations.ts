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
import type { AppInfoRelationshipsAppInfoLocalizationsDataInner } from './AppInfoRelationshipsAppInfoLocalizationsDataInner';
import {
    AppInfoRelationshipsAppInfoLocalizationsDataInnerFromJSON,
    AppInfoRelationshipsAppInfoLocalizationsDataInnerFromJSONTyped,
    AppInfoRelationshipsAppInfoLocalizationsDataInnerToJSON,
} from './AppInfoRelationshipsAppInfoLocalizationsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppInfoRelationshipsAppInfoLocalizations
 */
export interface AppInfoRelationshipsAppInfoLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppInfoRelationshipsAppInfoLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppInfoRelationshipsAppInfoLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppInfoRelationshipsAppInfoLocalizationsDataInner>}
     * @memberof AppInfoRelationshipsAppInfoLocalizations
     */
    data?: Array<AppInfoRelationshipsAppInfoLocalizationsDataInner>;
}

/**
 * Check if a given object implements the AppInfoRelationshipsAppInfoLocalizations interface.
 */
export function instanceOfAppInfoRelationshipsAppInfoLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoRelationshipsAppInfoLocalizationsFromJSON(json: any): AppInfoRelationshipsAppInfoLocalizations {
    return AppInfoRelationshipsAppInfoLocalizationsFromJSONTyped(json, false);
}

export function AppInfoRelationshipsAppInfoLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoRelationshipsAppInfoLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppInfoRelationshipsAppInfoLocalizationsDataInnerFromJSON)),
    };
}

export function AppInfoRelationshipsAppInfoLocalizationsToJSON(value?: AppInfoRelationshipsAppInfoLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppInfoRelationshipsAppInfoLocalizationsDataInnerToJSON)),
    };
}

