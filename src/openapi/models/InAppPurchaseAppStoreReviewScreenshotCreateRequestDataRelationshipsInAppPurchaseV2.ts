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
import type { AppRelationshipsInAppPurchasesDataInner } from './AppRelationshipsInAppPurchasesDataInner';
import {
    AppRelationshipsInAppPurchasesDataInnerFromJSON,
    AppRelationshipsInAppPurchasesDataInnerFromJSONTyped,
    AppRelationshipsInAppPurchasesDataInnerToJSON,
} from './AppRelationshipsInAppPurchasesDataInner';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2
 */
export interface InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    /**
     * 
     * @type {AppRelationshipsInAppPurchasesDataInner}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2
     */
    data: AppRelationshipsInAppPurchasesDataInner;
}

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    return InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppRelationshipsInAppPurchasesDataInnerFromJSON(json['data']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSON(value?: InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppRelationshipsInAppPurchasesDataInnerToJSON(value.data),
    };
}

