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
import type { AppStoreVersionRelationshipsGameCenterAppVersionData } from './AppStoreVersionRelationshipsGameCenterAppVersionData';
import {
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped,
    AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON,
} from './AppStoreVersionRelationshipsGameCenterAppVersionData';
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
 * @interface GameCenterAppVersionRelationshipsCompatibilityVersions
 */
export interface GameCenterAppVersionRelationshipsCompatibilityVersions {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterAppVersionRelationshipsCompatibilityVersions
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterAppVersionRelationshipsCompatibilityVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppStoreVersionRelationshipsGameCenterAppVersionData>}
     * @memberof GameCenterAppVersionRelationshipsCompatibilityVersions
     */
    data?: Array<AppStoreVersionRelationshipsGameCenterAppVersionData>;
}

/**
 * Check if a given object implements the GameCenterAppVersionRelationshipsCompatibilityVersions interface.
 */
export function instanceOfGameCenterAppVersionRelationshipsCompatibilityVersions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsFromJSON(json: any): GameCenterAppVersionRelationshipsCompatibilityVersions {
    return GameCenterAppVersionRelationshipsCompatibilityVersionsFromJSONTyped(json, false);
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionRelationshipsCompatibilityVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON)),
    };
}

export function GameCenterAppVersionRelationshipsCompatibilityVersionsToJSON(value?: GameCenterAppVersionRelationshipsCompatibilityVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON)),
    };
}

