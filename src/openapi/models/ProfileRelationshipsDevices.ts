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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { ProfileRelationshipsDevicesDataInner } from './ProfileRelationshipsDevicesDataInner';
import {
    ProfileRelationshipsDevicesDataInnerFromJSON,
    ProfileRelationshipsDevicesDataInnerFromJSONTyped,
    ProfileRelationshipsDevicesDataInnerToJSON,
} from './ProfileRelationshipsDevicesDataInner';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface ProfileRelationshipsDevices
 */
export interface ProfileRelationshipsDevices {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof ProfileRelationshipsDevices
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ProfileRelationshipsDevices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<ProfileRelationshipsDevicesDataInner>}
     * @memberof ProfileRelationshipsDevices
     */
    data?: Array<ProfileRelationshipsDevicesDataInner>;
}

/**
 * Check if a given object implements the ProfileRelationshipsDevices interface.
 */
export function instanceOfProfileRelationshipsDevices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileRelationshipsDevicesFromJSON(json: any): ProfileRelationshipsDevices {
    return ProfileRelationshipsDevicesFromJSONTyped(json, false);
}

export function ProfileRelationshipsDevicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileRelationshipsDevices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ProfileRelationshipsDevicesDataInnerFromJSON)),
    };
}

export function ProfileRelationshipsDevicesToJSON(value?: ProfileRelationshipsDevices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ProfileRelationshipsDevicesDataInnerToJSON)),
    };
}

