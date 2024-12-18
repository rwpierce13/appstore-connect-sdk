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
import type { AppClipAdvancedExperienceLanguage } from './AppClipAdvancedExperienceLanguage';
import {
    AppClipAdvancedExperienceLanguageFromJSON,
    AppClipAdvancedExperienceLanguageFromJSONTyped,
    AppClipAdvancedExperienceLanguageToJSON,
} from './AppClipAdvancedExperienceLanguage';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceLocalizationAttributes
 */
export interface AppClipAdvancedExperienceLocalizationAttributes {
    /**
     * 
     * @type {AppClipAdvancedExperienceLanguage}
     * @memberof AppClipAdvancedExperienceLocalizationAttributes
     */
    language?: AppClipAdvancedExperienceLanguage;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalizationAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalizationAttributes
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceLocalizationAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceLocalizationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceLocalizationAttributesFromJSON(json: any): AppClipAdvancedExperienceLocalizationAttributes {
    return AppClipAdvancedExperienceLocalizationAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceLocalizationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': !exists(json, 'language') ? undefined : AppClipAdvancedExperienceLanguageFromJSON(json['language']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
    };
}

export function AppClipAdvancedExperienceLocalizationAttributesToJSON(value?: AppClipAdvancedExperienceLocalizationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': AppClipAdvancedExperienceLanguageToJSON(value.language),
        'title': value.title,
        'subtitle': value.subtitle,
    };
}

