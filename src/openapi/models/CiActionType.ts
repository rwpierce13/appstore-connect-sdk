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


/**
 * 
 * @export
 */
export const CiActionType = {
    Build: 'BUILD',
    Analyze: 'ANALYZE',
    Test: 'TEST',
    Archive: 'ARCHIVE'
} as const;
export type CiActionType = typeof CiActionType[keyof typeof CiActionType];


export function CiActionTypeFromJSON(json: any): CiActionType {
    return CiActionTypeFromJSONTyped(json, false);
}

export function CiActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiActionType {
    return json as CiActionType;
}

export function CiActionTypeToJSON(value?: CiActionType | null): any {
    return value as any;
}

