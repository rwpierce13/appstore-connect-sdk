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
import type { SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships } from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships';
import {
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSONTyped,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSON,
} from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData
     */
    type: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum;
    /**
     * 
     * @type {SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData
     */
    relationships: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships;
}


/**
 * @export
 */
export const SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum = {
    SandboxTestersClearPurchaseHistoryRequest: 'sandboxTestersClearPurchaseHistoryRequest'
} as const;
export type SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum = typeof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum[keyof typeof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

