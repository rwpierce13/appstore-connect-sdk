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
import type { AppStoreReviewAttachmentUpdateRequestData } from './AppStoreReviewAttachmentUpdateRequestData';
import {
    AppStoreReviewAttachmentUpdateRequestDataFromJSON,
    AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped,
    AppStoreReviewAttachmentUpdateRequestDataToJSON,
} from './AppStoreReviewAttachmentUpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentUpdateRequest
 */
export interface AppStoreReviewAttachmentUpdateRequest {
    /**
     * 
     * @type {AppStoreReviewAttachmentUpdateRequestData}
     * @memberof AppStoreReviewAttachmentUpdateRequest
     */
    data: AppStoreReviewAttachmentUpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentUpdateRequest interface.
 */
export function instanceOfAppStoreReviewAttachmentUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentUpdateRequestFromJSON(json: any): AppStoreReviewAttachmentUpdateRequest {
    return AppStoreReviewAttachmentUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreReviewAttachmentUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreReviewAttachmentUpdateRequestToJSON(value?: AppStoreReviewAttachmentUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreReviewAttachmentUpdateRequestDataToJSON(value.data),
    };
}

