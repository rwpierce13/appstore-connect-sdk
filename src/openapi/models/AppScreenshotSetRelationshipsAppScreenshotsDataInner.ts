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
 * @interface AppScreenshotSetRelationshipsAppScreenshotsDataInner
 */
export interface AppScreenshotSetRelationshipsAppScreenshotsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotSetRelationshipsAppScreenshotsDataInner
     */
    type: AppScreenshotSetRelationshipsAppScreenshotsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotSetRelationshipsAppScreenshotsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppScreenshotSetRelationshipsAppScreenshotsDataInnerTypeEnum = {
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotSetRelationshipsAppScreenshotsDataInnerTypeEnum = typeof AppScreenshotSetRelationshipsAppScreenshotsDataInnerTypeEnum[keyof typeof AppScreenshotSetRelationshipsAppScreenshotsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppScreenshotSetRelationshipsAppScreenshotsDataInner interface.
 */
export function instanceOfAppScreenshotSetRelationshipsAppScreenshotsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON(json: any): AppScreenshotSetRelationshipsAppScreenshotsDataInner {
    return AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped(json, false);
}

export function AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetRelationshipsAppScreenshotsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON(value?: AppScreenshotSetRelationshipsAppScreenshotsDataInner | null): any {
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

