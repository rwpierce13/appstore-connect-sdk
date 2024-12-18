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
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON,
} from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import type { AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments } from './AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments';
import {
    AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsFromJSON,
    AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsFromJSONTyped,
    AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsToJSON,
} from './AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentRelationships
 */
export interface AppStoreVersionExperimentRelationships {
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppStoreVersionExperimentRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments}
     * @memberof AppStoreVersionExperimentRelationships
     */
    appStoreVersionExperimentTreatments?: AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentRelationshipsFromJSON(json: any): AppStoreVersionExperimentRelationships {
    return AppStoreVersionExperimentRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersion': !exists(json, 'appStoreVersion') ? undefined : AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersion']),
        'appStoreVersionExperimentTreatments': !exists(json, 'appStoreVersionExperimentTreatments') ? undefined : AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsFromJSON(json['appStoreVersionExperimentTreatments']),
    };
}

export function AppStoreVersionExperimentRelationshipsToJSON(value?: AppStoreVersionExperimentRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersion': AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value.appStoreVersion),
        'appStoreVersionExperimentTreatments': AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsToJSON(value.appStoreVersionExperimentTreatments),
    };
}

