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
import type { AppRelationshipsGameCenterEnabledVersionsDataInner } from './AppRelationshipsGameCenterEnabledVersionsDataInner';
import {
    AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON,
    AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped,
    AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON,
} from './AppRelationshipsGameCenterEnabledVersionsDataInner';

/**
 * 
 * @export
 * @interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
 */
export interface GameCenterEnabledVersionCompatibleVersionsLinkagesRequest {
    /**
     * 
     * @type {Array<AppRelationshipsGameCenterEnabledVersionsDataInner>}
     * @memberof GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
     */
    data: Array<AppRelationshipsGameCenterEnabledVersionsDataInner>;
}

/**
 * Check if a given object implements the GameCenterEnabledVersionCompatibleVersionsLinkagesRequest interface.
 */
export function instanceOfGameCenterEnabledVersionCompatibleVersionsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterEnabledVersionCompatibleVersionsLinkagesRequestFromJSON(json: any): GameCenterEnabledVersionCompatibleVersionsLinkagesRequest {
    return GameCenterEnabledVersionCompatibleVersionsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionCompatibleVersionsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionCompatibleVersionsLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON)),
    };
}

export function GameCenterEnabledVersionCompatibleVersionsLinkagesRequestToJSON(value?: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON)),
    };
}

