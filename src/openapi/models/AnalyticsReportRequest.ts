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
import type { AnalyticsReportRequestAttributes } from './AnalyticsReportRequestAttributes';
import {
    AnalyticsReportRequestAttributesFromJSON,
    AnalyticsReportRequestAttributesFromJSONTyped,
    AnalyticsReportRequestAttributesToJSON,
} from './AnalyticsReportRequestAttributes';
import type { AnalyticsReportRequestRelationships } from './AnalyticsReportRequestRelationships';
import {
    AnalyticsReportRequestRelationshipsFromJSON,
    AnalyticsReportRequestRelationshipsFromJSONTyped,
    AnalyticsReportRequestRelationshipsToJSON,
} from './AnalyticsReportRequestRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AnalyticsReportRequest
 */
export interface AnalyticsReportRequest {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportRequest
     */
    type: AnalyticsReportRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportRequest
     */
    id: string;
    /**
     * 
     * @type {AnalyticsReportRequestAttributes}
     * @memberof AnalyticsReportRequest
     */
    attributes?: AnalyticsReportRequestAttributes;
    /**
     * 
     * @type {AnalyticsReportRequestRelationships}
     * @memberof AnalyticsReportRequest
     */
    relationships?: AnalyticsReportRequestRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AnalyticsReportRequest
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AnalyticsReportRequestTypeEnum = {
    AnalyticsReportRequests: 'analyticsReportRequests'
} as const;
export type AnalyticsReportRequestTypeEnum = typeof AnalyticsReportRequestTypeEnum[keyof typeof AnalyticsReportRequestTypeEnum];


/**
 * Check if a given object implements the AnalyticsReportRequest interface.
 */
export function instanceOfAnalyticsReportRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AnalyticsReportRequestFromJSON(json: any): AnalyticsReportRequest {
    return AnalyticsReportRequestFromJSONTyped(json, false);
}

export function AnalyticsReportRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AnalyticsReportRequestAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AnalyticsReportRequestRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AnalyticsReportRequestToJSON(value?: AnalyticsReportRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AnalyticsReportRequestAttributesToJSON(value.attributes),
        'relationships': AnalyticsReportRequestRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

