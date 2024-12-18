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
import type { AppMediaPreviewFrameImageState } from './AppMediaPreviewFrameImageState';
import {
    AppMediaPreviewFrameImageStateFromJSON,
    AppMediaPreviewFrameImageStateFromJSONTyped,
    AppMediaPreviewFrameImageStateToJSON,
} from './AppMediaPreviewFrameImageState';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';

/**
 * 
 * @export
 * @interface PreviewFrameImage
 */
export interface PreviewFrameImage {
    /**
     * 
     * @type {ImageAsset}
     * @memberof PreviewFrameImage
     */
    image?: ImageAsset;
    /**
     * 
     * @type {AppMediaPreviewFrameImageState}
     * @memberof PreviewFrameImage
     */
    state?: AppMediaPreviewFrameImageState;
}

/**
 * Check if a given object implements the PreviewFrameImage interface.
 */
export function instanceOfPreviewFrameImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreviewFrameImageFromJSON(json: any): PreviewFrameImage {
    return PreviewFrameImageFromJSONTyped(json, false);
}

export function PreviewFrameImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviewFrameImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': !exists(json, 'image') ? undefined : ImageAssetFromJSON(json['image']),
        'state': !exists(json, 'state') ? undefined : AppMediaPreviewFrameImageStateFromJSON(json['state']),
    };
}

export function PreviewFrameImageToJSON(value?: PreviewFrameImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': ImageAssetToJSON(value.image),
        'state': AppMediaPreviewFrameImageStateToJSON(value.state),
    };
}
