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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
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
 * @interface ScmGitReferenceResponse
 */
export interface ScmGitReferenceResponse {
    /**
     * 
     * @type {ScmGitReference}
     * @memberof ScmGitReferenceResponse
     */
    data: ScmGitReference;
    /**
     * 
     * @type {Array<ScmRepository>}
     * @memberof ScmGitReferenceResponse
     */
    included?: Array<ScmRepository>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ScmGitReferenceResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ScmGitReferenceResponse interface.
 */
export function instanceOfScmGitReferenceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ScmGitReferenceResponseFromJSON(json: any): ScmGitReferenceResponse {
    return ScmGitReferenceResponseFromJSONTyped(json, false);
}

export function ScmGitReferenceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReferenceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ScmGitReferenceFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ScmRepositoryFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ScmGitReferenceResponseToJSON(value?: ScmGitReferenceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ScmGitReferenceToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ScmRepositoryToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}
