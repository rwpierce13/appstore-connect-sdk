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
import type { AppPreviewSetRelationshipsAppStoreVersionLocalizationData } from './AppPreviewSetRelationshipsAppStoreVersionLocalizationData';
import {
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON,
} from './AppPreviewSetRelationshipsAppStoreVersionLocalizationData';

/**
 * 
 * @export
 * @interface AppPreviewSetRelationshipsAppStoreVersionLocalization
 */
export interface AppPreviewSetRelationshipsAppStoreVersionLocalization {
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppStoreVersionLocalizationData}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionLocalization
     */
    data?: AppPreviewSetRelationshipsAppStoreVersionLocalizationData;
}

/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppStoreVersionLocalization interface.
 */
export function instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSON(json: any): AppPreviewSetRelationshipsAppStoreVersionLocalization {
    return AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppStoreVersionLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON(json['data']),
    };
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSON(value?: AppPreviewSetRelationshipsAppStoreVersionLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON(value.data),
    };
}

