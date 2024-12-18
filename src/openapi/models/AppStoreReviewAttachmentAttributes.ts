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
import type { AppMediaAssetState } from './AppMediaAssetState';
import {
    AppMediaAssetStateFromJSON,
    AppMediaAssetStateFromJSONTyped,
    AppMediaAssetStateToJSON,
} from './AppMediaAssetState';
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
} from './UploadOperation';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentAttributes
 */
export interface AppStoreReviewAttachmentAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentAttributes interface.
 */
export function instanceOfAppStoreReviewAttachmentAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreReviewAttachmentAttributesFromJSON(json: any): AppStoreReviewAttachmentAttributes {
    return AppStoreReviewAttachmentAttributesFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'sourceFileChecksum': !exists(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': !exists(json, 'assetDeliveryState') ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
    };
}

export function AppStoreReviewAttachmentAttributesToJSON(value?: AppStoreReviewAttachmentAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'sourceFileChecksum': value.sourceFileChecksum,
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value.assetDeliveryState),
    };
}

