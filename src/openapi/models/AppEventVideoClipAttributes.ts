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
import type { AppEventAssetType } from './AppEventAssetType';
import {
    AppEventAssetTypeFromJSON,
    AppEventAssetTypeFromJSONTyped,
    AppEventAssetTypeToJSON,
} from './AppEventAssetType';
import type { AppMediaAssetState } from './AppMediaAssetState';
import {
    AppMediaAssetStateFromJSON,
    AppMediaAssetStateFromJSONTyped,
    AppMediaAssetStateToJSON,
} from './AppMediaAssetState';
import type { AppMediaVideoState } from './AppMediaVideoState';
import {
    AppMediaVideoStateFromJSON,
    AppMediaVideoStateFromJSONTyped,
    AppMediaVideoStateToJSON,
} from './AppMediaVideoState';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';
import type { PreviewFrameImage } from './PreviewFrameImage';
import {
    PreviewFrameImageFromJSON,
    PreviewFrameImageFromJSONTyped,
    PreviewFrameImageToJSON,
} from './PreviewFrameImage';
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
} from './UploadOperation';

/**
 * 
 * @export
 * @interface AppEventVideoClipAttributes
 */
export interface AppEventVideoClipAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppEventVideoClipAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipAttributes
     */
    videoUrl?: string;
    /**
     * 
     * @type {PreviewFrameImage}
     * @memberof AppEventVideoClipAttributes
     */
    previewFrameImage?: PreviewFrameImage;
    /**
     * 
     * @type {ImageAsset}
     * @memberof AppEventVideoClipAttributes
     */
    previewImage?: ImageAsset;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppEventVideoClipAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppEventVideoClipAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
    /**
     * 
     * @type {AppMediaVideoState}
     * @memberof AppEventVideoClipAttributes
     */
    videoDeliveryState?: AppMediaVideoState;
    /**
     * 
     * @type {AppEventAssetType}
     * @memberof AppEventVideoClipAttributes
     */
    appEventAssetType?: AppEventAssetType;
}

/**
 * Check if a given object implements the AppEventVideoClipAttributes interface.
 */
export function instanceOfAppEventVideoClipAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventVideoClipAttributesFromJSON(json: any): AppEventVideoClipAttributes {
    return AppEventVideoClipAttributesFromJSONTyped(json, false);
}

export function AppEventVideoClipAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'previewFrameTimeCode': !exists(json, 'previewFrameTimeCode') ? undefined : json['previewFrameTimeCode'],
        'videoUrl': !exists(json, 'videoUrl') ? undefined : json['videoUrl'],
        'previewFrameImage': !exists(json, 'previewFrameImage') ? undefined : PreviewFrameImageFromJSON(json['previewFrameImage']),
        'previewImage': !exists(json, 'previewImage') ? undefined : ImageAssetFromJSON(json['previewImage']),
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': !exists(json, 'assetDeliveryState') ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
        'videoDeliveryState': !exists(json, 'videoDeliveryState') ? undefined : AppMediaVideoStateFromJSON(json['videoDeliveryState']),
        'appEventAssetType': !exists(json, 'appEventAssetType') ? undefined : AppEventAssetTypeFromJSON(json['appEventAssetType']),
    };
}

export function AppEventVideoClipAttributesToJSON(value?: AppEventVideoClipAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'previewFrameTimeCode': value.previewFrameTimeCode,
        'videoUrl': value.videoUrl,
        'previewFrameImage': PreviewFrameImageToJSON(value.previewFrameImage),
        'previewImage': ImageAssetToJSON(value.previewImage),
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value.assetDeliveryState),
        'videoDeliveryState': AppMediaVideoStateToJSON(value.videoDeliveryState),
        'appEventAssetType': AppEventAssetTypeToJSON(value.appEventAssetType),
    };
}

