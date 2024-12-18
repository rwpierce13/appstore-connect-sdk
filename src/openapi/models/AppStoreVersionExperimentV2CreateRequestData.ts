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
import type { AnalyticsReportRequestCreateRequestDataRelationships } from './AnalyticsReportRequestCreateRequestDataRelationships';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSON,
} from './AnalyticsReportRequestCreateRequestDataRelationships';
import type { AppStoreVersionExperimentV2CreateRequestDataAttributes } from './AppStoreVersionExperimentV2CreateRequestDataAttributes';
import {
    AppStoreVersionExperimentV2CreateRequestDataAttributesFromJSON,
    AppStoreVersionExperimentV2CreateRequestDataAttributesFromJSONTyped,
    AppStoreVersionExperimentV2CreateRequestDataAttributesToJSON,
} from './AppStoreVersionExperimentV2CreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2CreateRequestData
 */
export interface AppStoreVersionExperimentV2CreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2CreateRequestData
     */
    type: AppStoreVersionExperimentV2CreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreVersionExperimentV2CreateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentV2CreateRequestData
     */
    attributes: AppStoreVersionExperimentV2CreateRequestDataAttributes;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof AppStoreVersionExperimentV2CreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionExperimentV2CreateRequestDataTypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
} as const;
export type AppStoreVersionExperimentV2CreateRequestDataTypeEnum = typeof AppStoreVersionExperimentV2CreateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentV2CreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentV2CreateRequestData interface.
 */
export function instanceOfAppStoreVersionExperimentV2CreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionExperimentV2CreateRequestDataFromJSON(json: any): AppStoreVersionExperimentV2CreateRequestData {
    return AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2CreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppStoreVersionExperimentV2CreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionExperimentV2CreateRequestDataToJSON(value?: AppStoreVersionExperimentV2CreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppStoreVersionExperimentV2CreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

