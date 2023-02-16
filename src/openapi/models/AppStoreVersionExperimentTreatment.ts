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
import type { AppStoreVersionExperimentTreatmentAttributes } from './AppStoreVersionExperimentTreatmentAttributes';
import {
    AppStoreVersionExperimentTreatmentAttributesFromJSON,
    AppStoreVersionExperimentTreatmentAttributesFromJSONTyped,
    AppStoreVersionExperimentTreatmentAttributesToJSON,
} from './AppStoreVersionExperimentTreatmentAttributes';
import type { AppStoreVersionExperimentTreatmentRelationships } from './AppStoreVersionExperimentTreatmentRelationships';
import {
    AppStoreVersionExperimentTreatmentRelationshipsFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsToJSON,
} from './AppStoreVersionExperimentTreatmentRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatment
 */
export interface AppStoreVersionExperimentTreatment {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatment
     */
    type: AppStoreVersionExperimentTreatmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatment
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentAttributes}
     * @memberof AppStoreVersionExperimentTreatment
     */
    attributes?: AppStoreVersionExperimentTreatmentAttributes;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationships}
     * @memberof AppStoreVersionExperimentTreatment
     */
    relationships?: AppStoreVersionExperimentTreatmentRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperimentTreatment
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentTypeEnum = {
    AppStoreVersionExperimentTreatments: 'appStoreVersionExperimentTreatments'
} as const;
export type AppStoreVersionExperimentTreatmentTypeEnum = typeof AppStoreVersionExperimentTreatmentTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentTreatment interface.
 */
export function instanceOfAppStoreVersionExperimentTreatment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentFromJSON(json: any): AppStoreVersionExperimentTreatment {
    return AppStoreVersionExperimentTreatmentFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreVersionExperimentTreatmentAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreVersionExperimentTreatmentRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentTreatmentToJSON(value?: AppStoreVersionExperimentTreatment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreVersionExperimentTreatmentAttributesToJSON(value.attributes),
        'relationships': AppStoreVersionExperimentTreatmentRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
