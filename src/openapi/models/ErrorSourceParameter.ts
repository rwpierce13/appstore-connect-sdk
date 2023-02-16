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
/**
 * 
 * @export
 * @interface ErrorSourceParameter
 */
export interface ErrorSourceParameter {
    /**
     * 
     * @type {string}
     * @memberof ErrorSourceParameter
     */
    parameter?: string;
}

/**
 * Check if a given object implements the ErrorSourceParameter interface.
 */
export function instanceOfErrorSourceParameter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorSourceParameterFromJSON(json: any): ErrorSourceParameter {
    return ErrorSourceParameterFromJSONTyped(json, false);
}

export function ErrorSourceParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorSourceParameter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
    };
}

export function ErrorSourceParameterToJSON(value?: ErrorSourceParameter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parameter': value.parameter,
    };
}
