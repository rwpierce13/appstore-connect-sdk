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
 * @interface GameCenterMatchmakingQueueCreateRequestDataAttributes
 */
export interface GameCenterMatchmakingQueueCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataAttributes
     */
    classicMatchmakingBundleIds?: Array<string>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "referenceName" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestDataAttributes {
    return GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'classicMatchmakingBundleIds': !exists(json, 'classicMatchmakingBundleIds') ? undefined : json['classicMatchmakingBundleIds'],
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataAttributesToJSON(value?: GameCenterMatchmakingQueueCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
        'classicMatchmakingBundleIds': value.classicMatchmakingBundleIds,
    };
}

