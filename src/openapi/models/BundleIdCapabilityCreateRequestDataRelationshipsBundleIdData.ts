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
 * @interface BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData
 */
export interface BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData {
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData
     */
    type: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData
     */
    id: string;
}


/**
 * @export
 */
export const BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum = {
    BundleIds: 'bundleIds'
} as const;
export type BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum = typeof BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum[keyof typeof BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum];


/**
 * Check if a given object implements the BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData interface.
 */
export function instanceOfBundleIdCapabilityCreateRequestDataRelationshipsBundleIdData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON(json: any): BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData {
    return BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped(json, false);
}

export function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON(value?: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData | null): any {
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

