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
export const MetricCategory = {
    Hang: 'HANG',
    Launch: 'LAUNCH',
    Memory: 'MEMORY',
    Disk: 'DISK',
    Battery: 'BATTERY',
    Termination: 'TERMINATION',
    Animation: 'ANIMATION'
} as const;
export type MetricCategory = typeof MetricCategory[keyof typeof MetricCategory];


export function MetricCategoryFromJSON(json: any): MetricCategory {
    return MetricCategoryFromJSONTyped(json, false);
}

export function MetricCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricCategory {
    return json as MetricCategory;
}

export function MetricCategoryToJSON(value?: MetricCategory | null): any {
    return value as any;
}

