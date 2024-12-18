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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { ScmGitReferenceAttributes } from './ScmGitReferenceAttributes';
import {
    ScmGitReferenceAttributesFromJSON,
    ScmGitReferenceAttributesFromJSONTyped,
    ScmGitReferenceAttributesToJSON,
} from './ScmGitReferenceAttributes';
import type { ScmGitReferenceRelationships } from './ScmGitReferenceRelationships';
import {
    ScmGitReferenceRelationshipsFromJSON,
    ScmGitReferenceRelationshipsFromJSONTyped,
    ScmGitReferenceRelationshipsToJSON,
} from './ScmGitReferenceRelationships';

/**
 * 
 * @export
 * @interface ScmGitReference
 */
export interface ScmGitReference {
    /**
     * 
     * @type {string}
     * @memberof ScmGitReference
     */
    type: ScmGitReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ScmGitReference
     */
    id: string;
    /**
     * 
     * @type {ScmGitReferenceAttributes}
     * @memberof ScmGitReference
     */
    attributes?: ScmGitReferenceAttributes;
    /**
     * 
     * @type {ScmGitReferenceRelationships}
     * @memberof ScmGitReference
     */
    relationships?: ScmGitReferenceRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof ScmGitReference
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const ScmGitReferenceTypeEnum = {
    ScmGitReferences: 'scmGitReferences'
} as const;
export type ScmGitReferenceTypeEnum = typeof ScmGitReferenceTypeEnum[keyof typeof ScmGitReferenceTypeEnum];


/**
 * Check if a given object implements the ScmGitReference interface.
 */
export function instanceOfScmGitReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ScmGitReferenceFromJSON(json: any): ScmGitReference {
    return ScmGitReferenceFromJSONTyped(json, false);
}

export function ScmGitReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : ScmGitReferenceAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : ScmGitReferenceRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function ScmGitReferenceToJSON(value?: ScmGitReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': ScmGitReferenceAttributesToJSON(value.attributes),
        'relationships': ScmGitReferenceRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

