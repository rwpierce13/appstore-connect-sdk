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
import type { AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization } from './AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization';
import {
    AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON,
    AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped,
    AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON,
} from './AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization';
import type { AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization } from './AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import {
    AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON,
} from './AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import type { AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization } from './AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization';
import {
    AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFromJSON,
    AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFromJSONTyped,
    AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationToJSON,
} from './AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization';

/**
 * 
 * @export
 * @interface AppPreviewSetCreateRequestDataRelationships
 */
export interface AppPreviewSetCreateRequestDataRelationships {
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization}
     * @memberof AppPreviewSetCreateRequestDataRelationships
     */
    appStoreVersionLocalization?: AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization;
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization}
     * @memberof AppPreviewSetCreateRequestDataRelationships
     */
    appCustomProductPageLocalization?: AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization;
    /**
     * 
     * @type {AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization}
     * @memberof AppPreviewSetCreateRequestDataRelationships
     */
    appStoreVersionExperimentTreatmentLocalization?: AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization;
}

/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationships interface.
 */
export function instanceOfAppPreviewSetCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewSetCreateRequestDataRelationshipsFromJSON(json: any): AppPreviewSetCreateRequestDataRelationships {
    return AppPreviewSetCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppPreviewSetCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersionLocalization': !exists(json, 'appStoreVersionLocalization') ? undefined : AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFromJSON(json['appStoreVersionLocalization']),
        'appCustomProductPageLocalization': !exists(json, 'appCustomProductPageLocalization') ? undefined : AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON(json['appCustomProductPageLocalization']),
        'appStoreVersionExperimentTreatmentLocalization': !exists(json, 'appStoreVersionExperimentTreatmentLocalization') ? undefined : AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON(json['appStoreVersionExperimentTreatmentLocalization']),
    };
}

export function AppPreviewSetCreateRequestDataRelationshipsToJSON(value?: AppPreviewSetCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersionLocalization': AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationToJSON(value.appStoreVersionLocalization),
        'appCustomProductPageLocalization': AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON(value.appCustomProductPageLocalization),
        'appStoreVersionExperimentTreatmentLocalization': AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON(value.appStoreVersionExperimentTreatmentLocalization),
    };
}
