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
import type { InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships } from './InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface InAppPurchaseSubmissionCreateRequestData
 */
export interface InAppPurchaseSubmissionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseSubmissionCreateRequestData
     */
    type: InAppPurchaseSubmissionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships}
     * @memberof InAppPurchaseSubmissionCreateRequestData
     */
    relationships: InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseSubmissionCreateRequestDataTypeEnum = {
    InAppPurchaseSubmissions: 'inAppPurchaseSubmissions'
} as const;
export type InAppPurchaseSubmissionCreateRequestDataTypeEnum = typeof InAppPurchaseSubmissionCreateRequestDataTypeEnum[keyof typeof InAppPurchaseSubmissionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseSubmissionCreateRequestData interface.
 */
export function instanceOfInAppPurchaseSubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function InAppPurchaseSubmissionCreateRequestDataFromJSON(json: any): InAppPurchaseSubmissionCreateRequestData {
    return InAppPurchaseSubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseSubmissionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseSubmissionCreateRequestDataToJSON(value?: InAppPurchaseSubmissionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

