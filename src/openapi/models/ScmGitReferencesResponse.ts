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
import type { ScmGitReference } from './ScmGitReference';
import {
    ScmGitReferenceFromJSON,
    ScmGitReferenceFromJSONTyped,
    ScmGitReferenceToJSON,
} from './ScmGitReference';
import type { ScmRepository } from './ScmRepository';
import {
    ScmRepositoryFromJSON,
    ScmRepositoryFromJSONTyped,
    ScmRepositoryToJSON,
} from './ScmRepository';

/**
 * 
 * @export
 * @interface ScmGitReferencesResponse
 */
export interface ScmGitReferencesResponse {
    /**
     * 
     * @type {Array<ScmGitReference>}
     * @memberof ScmGitReferencesResponse
     */
    data: Array<ScmGitReference>;
    /**
     * 
     * @type {Array<ScmRepository>}
     * @memberof ScmGitReferencesResponse
     */
    included?: Array<ScmRepository>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ScmGitReferencesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ScmGitReferencesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ScmGitReferencesResponse interface.
 */
export function instanceOfScmGitReferencesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ScmGitReferencesResponseFromJSON(json: any): ScmGitReferencesResponse {
    return ScmGitReferencesResponseFromJSONTyped(json, false);
}

export function ScmGitReferencesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReferencesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ScmGitReferenceFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ScmRepositoryFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ScmGitReferencesResponseToJSON(value?: ScmGitReferencesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ScmGitReferenceToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ScmRepositoryToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

