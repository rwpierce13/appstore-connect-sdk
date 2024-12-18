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
 * @interface AlternativeDistributionPackageVersionRelationshipsVariantsDataInner
 */
export interface AlternativeDistributionPackageVersionRelationshipsVariantsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariantsDataInner
     */
    type: AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariantsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerTypeEnum = {
    AlternativeDistributionPackageVariants: 'alternativeDistributionPackageVariants'
} as const;
export type AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerTypeEnum = typeof AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerTypeEnum[keyof typeof AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerTypeEnum];


/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationshipsVariantsDataInner interface.
 */
export function instanceOfAlternativeDistributionPackageVersionRelationshipsVariantsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSON(json: any): AlternativeDistributionPackageVersionRelationshipsVariantsDataInner {
    return AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationshipsVariantsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSON(value?: AlternativeDistributionPackageVersionRelationshipsVariantsDataInner | null): any {
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
