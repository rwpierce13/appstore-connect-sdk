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
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from './AlternativeDistributionPackageCreateRequestDataRelationships';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON,
} from './AlternativeDistributionPackageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterAppVersionCreateRequestData
 */
export interface GameCenterAppVersionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAppVersionCreateRequestData
     */
    type: GameCenterAppVersionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof GameCenterAppVersionCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterAppVersionCreateRequestDataTypeEnum = {
    GameCenterAppVersions: 'gameCenterAppVersions'
} as const;
export type GameCenterAppVersionCreateRequestDataTypeEnum = typeof GameCenterAppVersionCreateRequestDataTypeEnum[keyof typeof GameCenterAppVersionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAppVersionCreateRequestData interface.
 */
export function instanceOfGameCenterAppVersionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterAppVersionCreateRequestDataFromJSON(json: any): GameCenterAppVersionCreateRequestData {
    return GameCenterAppVersionCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAppVersionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterAppVersionCreateRequestDataToJSON(value?: GameCenterAppVersionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
