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
import type { ScreenshotDisplayType } from './ScreenshotDisplayType';
import {
    ScreenshotDisplayTypeFromJSON,
    ScreenshotDisplayTypeFromJSONTyped,
    ScreenshotDisplayTypeToJSON,
} from './ScreenshotDisplayType';

/**
 * 
 * @export
 * @interface AppScreenshotSetCreateRequestDataAttributes
 */
export interface AppScreenshotSetCreateRequestDataAttributes {
    /**
     * 
     * @type {ScreenshotDisplayType}
     * @memberof AppScreenshotSetCreateRequestDataAttributes
     */
    screenshotDisplayType: ScreenshotDisplayType;
}

/**
 * Check if a given object implements the AppScreenshotSetCreateRequestDataAttributes interface.
 */
export function instanceOfAppScreenshotSetCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "screenshotDisplayType" in value;

    return isInstance;
}

export function AppScreenshotSetCreateRequestDataAttributesFromJSON(json: any): AppScreenshotSetCreateRequestDataAttributes {
    return AppScreenshotSetCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppScreenshotSetCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'screenshotDisplayType': ScreenshotDisplayTypeFromJSON(json['screenshotDisplayType']),
    };
}

export function AppScreenshotSetCreateRequestDataAttributesToJSON(value?: AppScreenshotSetCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'screenshotDisplayType': ScreenshotDisplayTypeToJSON(value.screenshotDisplayType),
    };
}

