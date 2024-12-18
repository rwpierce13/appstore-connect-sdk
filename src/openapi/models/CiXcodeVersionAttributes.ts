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
import type { CiXcodeVersionAttributesTestDestinationsInner } from './CiXcodeVersionAttributesTestDestinationsInner';
import {
    CiXcodeVersionAttributesTestDestinationsInnerFromJSON,
    CiXcodeVersionAttributesTestDestinationsInnerFromJSONTyped,
    CiXcodeVersionAttributesTestDestinationsInnerToJSON,
} from './CiXcodeVersionAttributesTestDestinationsInner';

/**
 * 
 * @export
 * @interface CiXcodeVersionAttributes
 */
export interface CiXcodeVersionAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiXcodeVersionAttributes
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof CiXcodeVersionAttributes
     */
    name?: string;
    /**
     * 
     * @type {Array<CiXcodeVersionAttributesTestDestinationsInner>}
     * @memberof CiXcodeVersionAttributes
     */
    testDestinations?: Array<CiXcodeVersionAttributesTestDestinationsInner>;
}

/**
 * Check if a given object implements the CiXcodeVersionAttributes interface.
 */
export function instanceOfCiXcodeVersionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiXcodeVersionAttributesFromJSON(json: any): CiXcodeVersionAttributes {
    return CiXcodeVersionAttributesFromJSONTyped(json, false);
}

export function CiXcodeVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'testDestinations': !exists(json, 'testDestinations') ? undefined : ((json['testDestinations'] as Array<any>).map(CiXcodeVersionAttributesTestDestinationsInnerFromJSON)),
    };
}

export function CiXcodeVersionAttributesToJSON(value?: CiXcodeVersionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'name': value.name,
        'testDestinations': value.testDestinations === undefined ? undefined : ((value.testDestinations as Array<any>).map(CiXcodeVersionAttributesTestDestinationsInnerToJSON)),
    };
}

