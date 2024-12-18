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
 * @interface AppRelationshipsCiProductData
 */
export interface AppRelationshipsCiProductData {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsCiProductData
     */
    type: AppRelationshipsCiProductDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsCiProductData
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsCiProductDataTypeEnum = {
    CiProducts: 'ciProducts'
} as const;
export type AppRelationshipsCiProductDataTypeEnum = typeof AppRelationshipsCiProductDataTypeEnum[keyof typeof AppRelationshipsCiProductDataTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsCiProductData interface.
 */
export function instanceOfAppRelationshipsCiProductData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsCiProductDataFromJSON(json: any): AppRelationshipsCiProductData {
    return AppRelationshipsCiProductDataFromJSONTyped(json, false);
}

export function AppRelationshipsCiProductDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsCiProductData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsCiProductDataToJSON(value?: AppRelationshipsCiProductData | null): any {
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

