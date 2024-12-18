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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience';
import type { AppStoreVersionCreateRequestDataRelationshipsBuild } from './AppStoreVersionCreateRequestDataRelationshipsBuild';
import {
    AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON,
    AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped,
    AppStoreVersionCreateRequestDataRelationshipsBuildToJSON,
} from './AppStoreVersionCreateRequestDataRelationshipsBuild';

/**
 * 
 * @export
 * @interface AppStoreVersionUpdateRequestDataRelationships
 */
export interface AppStoreVersionUpdateRequestDataRelationships {
    /**
     * 
     * @type {AppStoreVersionCreateRequestDataRelationshipsBuild}
     * @memberof AppStoreVersionUpdateRequestDataRelationships
     */
    build?: AppStoreVersionCreateRequestDataRelationshipsBuild;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience}
     * @memberof AppStoreVersionUpdateRequestDataRelationships
     */
    appClipDefaultExperience?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience;
}

/**
 * Check if a given object implements the AppStoreVersionUpdateRequestDataRelationships interface.
 */
export function instanceOfAppStoreVersionUpdateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionUpdateRequestDataRelationshipsFromJSON(json: any): AppStoreVersionUpdateRequestDataRelationships {
    return AppStoreVersionUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionUpdateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'build': !exists(json, 'build') ? undefined : AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON(json['build']),
        'appClipDefaultExperience': !exists(json, 'appClipDefaultExperience') ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON(json['appClipDefaultExperience']),
    };
}

export function AppStoreVersionUpdateRequestDataRelationshipsToJSON(value?: AppStoreVersionUpdateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'build': AppStoreVersionCreateRequestDataRelationshipsBuildToJSON(value.build),
        'appClipDefaultExperience': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON(value.appClipDefaultExperience),
    };
}

