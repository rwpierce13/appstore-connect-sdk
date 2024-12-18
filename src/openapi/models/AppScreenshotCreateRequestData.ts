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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { AppScreenshotCreateRequestDataRelationships } from './AppScreenshotCreateRequestDataRelationships';
import {
    AppScreenshotCreateRequestDataRelationshipsFromJSON,
    AppScreenshotCreateRequestDataRelationshipsFromJSONTyped,
    AppScreenshotCreateRequestDataRelationshipsToJSON,
} from './AppScreenshotCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppScreenshotCreateRequestData
 */
export interface AppScreenshotCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotCreateRequestData
     */
    type: AppScreenshotCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof AppScreenshotCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {AppScreenshotCreateRequestDataRelationships}
     * @memberof AppScreenshotCreateRequestData
     */
    relationships: AppScreenshotCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppScreenshotCreateRequestDataTypeEnum = {
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotCreateRequestDataTypeEnum = typeof AppScreenshotCreateRequestDataTypeEnum[keyof typeof AppScreenshotCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppScreenshotCreateRequestData interface.
 */
export function instanceOfAppScreenshotCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppScreenshotCreateRequestDataFromJSON(json: any): AppScreenshotCreateRequestData {
    return AppScreenshotCreateRequestDataFromJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppScreenshotCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppScreenshotCreateRequestDataToJSON(value?: AppScreenshotCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppScreenshotCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

