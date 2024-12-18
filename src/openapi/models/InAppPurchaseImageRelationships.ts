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
import type { InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 } from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';

/**
 * 
 * @export
 * @interface InAppPurchaseImageRelationships
 */
export interface InAppPurchaseImageRelationships {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2}
     * @memberof InAppPurchaseImageRelationships
     */
    inAppPurchase?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
}

/**
 * Check if a given object implements the InAppPurchaseImageRelationships interface.
 */
export function instanceOfInAppPurchaseImageRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseImageRelationshipsFromJSON(json: any): InAppPurchaseImageRelationships {
    return InAppPurchaseImageRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchaseImageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inAppPurchase': !exists(json, 'inAppPurchase') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json['inAppPurchase']),
    };
}

export function InAppPurchaseImageRelationshipsToJSON(value?: InAppPurchaseImageRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inAppPurchase': InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(value.inAppPurchase),
    };
}

