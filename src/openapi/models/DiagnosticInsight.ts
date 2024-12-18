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
import type { DiagnosticInsightDirection } from './DiagnosticInsightDirection';
import {
    DiagnosticInsightDirectionFromJSON,
    DiagnosticInsightDirectionFromJSONTyped,
    DiagnosticInsightDirectionToJSON,
} from './DiagnosticInsightDirection';
import type { DiagnosticInsightReferenceVersionsInner } from './DiagnosticInsightReferenceVersionsInner';
import {
    DiagnosticInsightReferenceVersionsInnerFromJSON,
    DiagnosticInsightReferenceVersionsInnerFromJSONTyped,
    DiagnosticInsightReferenceVersionsInnerToJSON,
} from './DiagnosticInsightReferenceVersionsInner';
import type { DiagnosticInsightType } from './DiagnosticInsightType';
import {
    DiagnosticInsightTypeFromJSON,
    DiagnosticInsightTypeFromJSONTyped,
    DiagnosticInsightTypeToJSON,
} from './DiagnosticInsightType';

/**
 * 
 * @export
 * @interface DiagnosticInsight
 */
export interface DiagnosticInsight {
    /**
     * 
     * @type {DiagnosticInsightType}
     * @memberof DiagnosticInsight
     */
    insightType?: DiagnosticInsightType;
    /**
     * 
     * @type {DiagnosticInsightDirection}
     * @memberof DiagnosticInsight
     */
    direction?: DiagnosticInsightDirection;
    /**
     * 
     * @type {Array<DiagnosticInsightReferenceVersionsInner>}
     * @memberof DiagnosticInsight
     */
    referenceVersions?: Array<DiagnosticInsightReferenceVersionsInner>;
}

/**
 * Check if a given object implements the DiagnosticInsight interface.
 */
export function instanceOfDiagnosticInsight(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticInsightFromJSON(json: any): DiagnosticInsight {
    return DiagnosticInsightFromJSONTyped(json, false);
}

export function DiagnosticInsightFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticInsight {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'insightType': !exists(json, 'insightType') ? undefined : DiagnosticInsightTypeFromJSON(json['insightType']),
        'direction': !exists(json, 'direction') ? undefined : DiagnosticInsightDirectionFromJSON(json['direction']),
        'referenceVersions': !exists(json, 'referenceVersions') ? undefined : ((json['referenceVersions'] as Array<any>).map(DiagnosticInsightReferenceVersionsInnerFromJSON)),
    };
}

export function DiagnosticInsightToJSON(value?: DiagnosticInsight | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'insightType': DiagnosticInsightTypeToJSON(value.insightType),
        'direction': DiagnosticInsightDirectionToJSON(value.direction),
        'referenceVersions': value.referenceVersions === undefined ? undefined : ((value.referenceVersions as Array<any>).map(DiagnosticInsightReferenceVersionsInnerToJSON)),
    };
}
