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
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion } from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion';
import {
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationInlineCreateRelationships
 */
export interface AppCustomProductPageLocalizationInlineCreateRelationships {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion}
     * @memberof AppCustomProductPageLocalizationInlineCreateRelationships
     */
    appCustomProductPageVersion?: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationInlineCreateRelationships interface.
 */
export function instanceOfAppCustomProductPageLocalizationInlineCreateRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSON(json: any): AppCustomProductPageLocalizationInlineCreateRelationships {
    return AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationInlineCreateRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appCustomProductPageVersion': !exists(json, 'appCustomProductPageVersion') ? undefined : AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON(json['appCustomProductPageVersion']),
    };
}

export function AppCustomProductPageLocalizationInlineCreateRelationshipsToJSON(value?: AppCustomProductPageLocalizationInlineCreateRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appCustomProductPageVersion': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON(value.appCustomProductPageVersion),
    };
}

