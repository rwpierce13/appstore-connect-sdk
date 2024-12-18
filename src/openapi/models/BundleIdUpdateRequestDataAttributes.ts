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
/**
 * 
 * @export
 * @interface BundleIdUpdateRequestDataAttributes
 */
export interface BundleIdUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BundleIdUpdateRequestDataAttributes
     */
    name?: string;
}

/**
 * Check if a given object implements the BundleIdUpdateRequestDataAttributes interface.
 */
export function instanceOfBundleIdUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundleIdUpdateRequestDataAttributesFromJSON(json: any): BundleIdUpdateRequestDataAttributes {
    return BundleIdUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BundleIdUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BundleIdUpdateRequestDataAttributesToJSON(value?: BundleIdUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

