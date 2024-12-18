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
import type { AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalization } from './AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalization';
import {
    AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalizationFromJSON,
    AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalizationFromJSONTyped,
    AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalizationToJSON,
} from './AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalization';

/**
 * 
 * @export
 * @interface AppClipHeaderImageCreateRequestDataRelationships
 */
export interface AppClipHeaderImageCreateRequestDataRelationships {
    /**
     * 
     * @type {AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalization}
     * @memberof AppClipHeaderImageCreateRequestDataRelationships
     */
    appClipDefaultExperienceLocalization: AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalization;
}

/**
 * Check if a given object implements the AppClipHeaderImageCreateRequestDataRelationships interface.
 */
export function instanceOfAppClipHeaderImageCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appClipDefaultExperienceLocalization" in value;

    return isInstance;
}

export function AppClipHeaderImageCreateRequestDataRelationshipsFromJSON(json: any): AppClipHeaderImageCreateRequestDataRelationships {
    return AppClipHeaderImageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppClipHeaderImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appClipDefaultExperienceLocalization': AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalizationFromJSON(json['appClipDefaultExperienceLocalization']),
    };
}

export function AppClipHeaderImageCreateRequestDataRelationshipsToJSON(value?: AppClipHeaderImageCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appClipDefaultExperienceLocalization': AppClipHeaderImageCreateRequestDataRelationshipsAppClipDefaultExperienceLocalizationToJSON(value.appClipDefaultExperienceLocalization),
    };
}

