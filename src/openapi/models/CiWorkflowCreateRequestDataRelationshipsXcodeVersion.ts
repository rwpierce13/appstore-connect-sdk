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
import type { CiMacOsVersionRelationshipsXcodeVersionsDataInner } from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';
import {
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON,
} from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataRelationshipsXcodeVersion
 */
export interface CiWorkflowCreateRequestDataRelationshipsXcodeVersion {
    /**
     * 
     * @type {CiMacOsVersionRelationshipsXcodeVersionsDataInner}
     * @memberof CiWorkflowCreateRequestDataRelationshipsXcodeVersion
     */
    data: CiMacOsVersionRelationshipsXcodeVersionsDataInner;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataRelationshipsXcodeVersion interface.
 */
export function instanceOfCiWorkflowCreateRequestDataRelationshipsXcodeVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSON(json: any): CiWorkflowCreateRequestDataRelationshipsXcodeVersion {
    return CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataRelationshipsXcodeVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON(json['data']),
    };
}

export function CiWorkflowCreateRequestDataRelationshipsXcodeVersionToJSON(value?: CiWorkflowCreateRequestDataRelationshipsXcodeVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON(value.data),
    };
}

