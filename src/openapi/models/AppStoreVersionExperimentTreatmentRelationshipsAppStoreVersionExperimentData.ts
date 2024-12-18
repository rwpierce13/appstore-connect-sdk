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
/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData
 */
export interface AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData
     */
    type: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData
     */
    id: string;
}


/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataTypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
} as const;
export type AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataTypeEnum = typeof AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSON(json: any): AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData {
    return AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSON(value?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

