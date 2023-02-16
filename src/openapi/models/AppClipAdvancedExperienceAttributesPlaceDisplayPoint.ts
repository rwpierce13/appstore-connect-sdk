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
import type { AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates } from './AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates';
import {
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSON,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesToJSON,
} from './AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceAttributesPlaceDisplayPoint
 */
export interface AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates}
     * @memberof AppClipAdvancedExperienceAttributesPlaceDisplayPoint
     */
    coordinates?: AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceDisplayPoint
     */
    source?: AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum = {
    Calculated: 'CALCULATED',
    ManuallyPlaced: 'MANUALLY_PLACED'
} as const;
export type AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum = typeof AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum[keyof typeof AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlaceDisplayPoint interface.
 */
export function instanceOfAppClipAdvancedExperienceAttributesPlaceDisplayPoint(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON(json: any): AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    return AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coordinates': !exists(json, 'coordinates') ? undefined : AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSON(json['coordinates']),
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON(value?: AppClipAdvancedExperienceAttributesPlaceDisplayPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coordinates': AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesToJSON(value.coordinates),
        'source': value.source,
    };
}
