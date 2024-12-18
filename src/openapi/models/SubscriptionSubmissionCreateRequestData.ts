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
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships } from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionSubmissionCreateRequestData
 */
export interface SubscriptionSubmissionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSubmissionCreateRequestData
     */
    type: SubscriptionSubmissionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships}
     * @memberof SubscriptionSubmissionCreateRequestData
     */
    relationships: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionSubmissionCreateRequestDataTypeEnum = {
    SubscriptionSubmissions: 'subscriptionSubmissions'
} as const;
export type SubscriptionSubmissionCreateRequestDataTypeEnum = typeof SubscriptionSubmissionCreateRequestDataTypeEnum[keyof typeof SubscriptionSubmissionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionSubmissionCreateRequestData interface.
 */
export function instanceOfSubscriptionSubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionSubmissionCreateRequestDataFromJSON(json: any): SubscriptionSubmissionCreateRequestData {
    return SubscriptionSubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSubmissionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionSubmissionCreateRequestDataToJSON(value?: SubscriptionSubmissionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

