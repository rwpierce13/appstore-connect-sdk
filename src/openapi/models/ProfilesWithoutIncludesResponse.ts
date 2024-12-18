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
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface ProfilesWithoutIncludesResponse
 */
export interface ProfilesWithoutIncludesResponse {
    /**
     * 
     * @type {Array<Profile>}
     * @memberof ProfilesWithoutIncludesResponse
     */
    data: Array<Profile>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ProfilesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ProfilesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ProfilesWithoutIncludesResponse interface.
 */
export function instanceOfProfilesWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ProfilesWithoutIncludesResponseFromJSON(json: any): ProfilesWithoutIncludesResponse {
    return ProfilesWithoutIncludesResponseFromJSONTyped(json, false);
}

export function ProfilesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ProfileFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ProfilesWithoutIncludesResponseToJSON(value?: ProfilesWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ProfileToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
