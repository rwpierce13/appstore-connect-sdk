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
 * @interface AppStoreVersionExperimentTreatmentCreateRequestDataAttributes
 */
export interface AppStoreVersionExperimentTreatmentCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestDataAttributes
     */
    appIconName?: string;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentTreatmentCreateRequestDataAttributes {
    return AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'appIconName': !exists(json, 'appIconName') ? undefined : json['appIconName'],
    };
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataAttributesToJSON(value?: AppStoreVersionExperimentTreatmentCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'appIconName': value.appIconName,
    };
}

