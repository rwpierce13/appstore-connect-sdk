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
import type { AppClipAdvancedExperienceCreateRequestDataAttributes } from './AppClipAdvancedExperienceCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceCreateRequestDataAttributes';
import type { AppClipAdvancedExperienceCreateRequestDataRelationships } from './AppClipAdvancedExperienceCreateRequestDataRelationships';
import {
    AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSON,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSONTyped,
    AppClipAdvancedExperienceCreateRequestDataRelationshipsToJSON,
} from './AppClipAdvancedExperienceCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceCreateRequestData
 */
export interface AppClipAdvancedExperienceCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceCreateRequestData
     */
    type: AppClipAdvancedExperienceCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceCreateRequestDataAttributes}
     * @memberof AppClipAdvancedExperienceCreateRequestData
     */
    attributes: AppClipAdvancedExperienceCreateRequestDataAttributes;
    /**
     * 
     * @type {AppClipAdvancedExperienceCreateRequestDataRelationships}
     * @memberof AppClipAdvancedExperienceCreateRequestData
     */
    relationships: AppClipAdvancedExperienceCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceCreateRequestDataTypeEnum = {
    AppClipAdvancedExperiences: 'appClipAdvancedExperiences'
} as const;
export type AppClipAdvancedExperienceCreateRequestDataTypeEnum = typeof AppClipAdvancedExperienceCreateRequestDataTypeEnum[keyof typeof AppClipAdvancedExperienceCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestData interface.
 */
export function instanceOfAppClipAdvancedExperienceCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceCreateRequestDataFromJSON(json: any): AppClipAdvancedExperienceCreateRequestData {
    return AppClipAdvancedExperienceCreateRequestDataFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppClipAdvancedExperienceCreateRequestDataToJSON(value?: AppClipAdvancedExperienceCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppClipAdvancedExperienceCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

