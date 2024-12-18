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
import type { AlternativeDistributionPackageRelationships } from './AlternativeDistributionPackageRelationships';
import {
    AlternativeDistributionPackageRelationshipsFromJSON,
    AlternativeDistributionPackageRelationshipsFromJSONTyped,
    AlternativeDistributionPackageRelationshipsToJSON,
} from './AlternativeDistributionPackageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackage
 */
export interface AlternativeDistributionPackage {
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionPackage
     */
    type: AlternativeDistributionPackageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionPackage
     */
    id: string;
    /**
     * 
     * @type {AlternativeDistributionPackageRelationships}
     * @memberof AlternativeDistributionPackage
     */
    relationships?: AlternativeDistributionPackageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AlternativeDistributionPackage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AlternativeDistributionPackageTypeEnum = {
    AlternativeDistributionPackages: 'alternativeDistributionPackages'
} as const;
export type AlternativeDistributionPackageTypeEnum = typeof AlternativeDistributionPackageTypeEnum[keyof typeof AlternativeDistributionPackageTypeEnum];


/**
 * Check if a given object implements the AlternativeDistributionPackage interface.
 */
export function instanceOfAlternativeDistributionPackage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AlternativeDistributionPackageFromJSON(json: any): AlternativeDistributionPackage {
    return AlternativeDistributionPackageFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : AlternativeDistributionPackageRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AlternativeDistributionPackageToJSON(value?: AlternativeDistributionPackage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': AlternativeDistributionPackageRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

