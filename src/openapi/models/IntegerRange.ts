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
 * @interface IntegerRange
 */
export interface IntegerRange {
    /**
     * 
     * @type {number}
     * @memberof IntegerRange
     */
    minimum?: number;
    /**
     * 
     * @type {number}
     * @memberof IntegerRange
     */
    maximum?: number;
}

/**
 * Check if a given object implements the IntegerRange interface.
 */
export function instanceOfIntegerRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IntegerRangeFromJSON(json: any): IntegerRange {
    return IntegerRangeFromJSONTyped(json, false);
}

export function IntegerRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegerRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minimum': !exists(json, 'minimum') ? undefined : json['minimum'],
        'maximum': !exists(json, 'maximum') ? undefined : json['maximum'],
    };
}

export function IntegerRangeToJSON(value?: IntegerRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minimum': value.minimum,
        'maximum': value.maximum,
    };
}

