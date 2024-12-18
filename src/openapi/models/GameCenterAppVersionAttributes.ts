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
 * @interface GameCenterAppVersionAttributes
 */
export interface GameCenterAppVersionAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAppVersionAttributes
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the GameCenterAppVersionAttributes interface.
 */
export function instanceOfGameCenterAppVersionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAppVersionAttributesFromJSON(json: any): GameCenterAppVersionAttributes {
    return GameCenterAppVersionAttributesFromJSONTyped(json, false);
}

export function GameCenterAppVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function GameCenterAppVersionAttributesToJSON(value?: GameCenterAppVersionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}

