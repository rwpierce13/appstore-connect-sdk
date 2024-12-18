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
import type { CiBranchPatterns } from './CiBranchPatterns';
import {
    CiBranchPatternsFromJSON,
    CiBranchPatternsFromJSONTyped,
    CiBranchPatternsToJSON,
} from './CiBranchPatterns';

/**
 * 
 * @export
 * @interface CiManualBranchStartCondition
 */
export interface CiManualBranchStartCondition {
    /**
     * 
     * @type {CiBranchPatterns}
     * @memberof CiManualBranchStartCondition
     */
    source?: CiBranchPatterns;
}

/**
 * Check if a given object implements the CiManualBranchStartCondition interface.
 */
export function instanceOfCiManualBranchStartCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiManualBranchStartConditionFromJSON(json: any): CiManualBranchStartCondition {
    return CiManualBranchStartConditionFromJSONTyped(json, false);
}

export function CiManualBranchStartConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiManualBranchStartCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': !exists(json, 'source') ? undefined : CiBranchPatternsFromJSON(json['source']),
    };
}

export function CiManualBranchStartConditionToJSON(value?: CiManualBranchStartCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': CiBranchPatternsToJSON(value.source),
    };
}
