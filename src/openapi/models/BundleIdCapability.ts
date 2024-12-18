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
import type { BundleIdCapabilityAttributes } from './BundleIdCapabilityAttributes';
import {
    BundleIdCapabilityAttributesFromJSON,
    BundleIdCapabilityAttributesFromJSONTyped,
    BundleIdCapabilityAttributesToJSON,
} from './BundleIdCapabilityAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BundleIdCapability
 */
export interface BundleIdCapability {
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapability
     */
    type: BundleIdCapabilityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapability
     */
    id: string;
    /**
     * 
     * @type {BundleIdCapabilityAttributes}
     * @memberof BundleIdCapability
     */
    attributes?: BundleIdCapabilityAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BundleIdCapability
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BundleIdCapabilityTypeEnum = {
    BundleIdCapabilities: 'bundleIdCapabilities'
} as const;
export type BundleIdCapabilityTypeEnum = typeof BundleIdCapabilityTypeEnum[keyof typeof BundleIdCapabilityTypeEnum];


/**
 * Check if a given object implements the BundleIdCapability interface.
 */
export function instanceOfBundleIdCapability(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BundleIdCapabilityFromJSON(json: any): BundleIdCapability {
    return BundleIdCapabilityFromJSONTyped(json, false);
}

export function BundleIdCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapability {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BundleIdCapabilityAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BundleIdCapabilityToJSON(value?: BundleIdCapability | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BundleIdCapabilityAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

