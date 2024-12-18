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
import type { AppCustomProductPageCreateRequestData } from './AppCustomProductPageCreateRequestData';
import {
    AppCustomProductPageCreateRequestDataFromJSON,
    AppCustomProductPageCreateRequestDataFromJSONTyped,
    AppCustomProductPageCreateRequestDataToJSON,
} from './AppCustomProductPageCreateRequestData';
import type { AppCustomProductPageCreateRequestIncludedInner } from './AppCustomProductPageCreateRequestIncludedInner';
import {
    AppCustomProductPageCreateRequestIncludedInnerFromJSON,
    AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped,
    AppCustomProductPageCreateRequestIncludedInnerToJSON,
} from './AppCustomProductPageCreateRequestIncludedInner';

/**
 * 
 * @export
 * @interface AppCustomProductPageCreateRequest
 */
export interface AppCustomProductPageCreateRequest {
    /**
     * 
     * @type {AppCustomProductPageCreateRequestData}
     * @memberof AppCustomProductPageCreateRequest
     */
    data: AppCustomProductPageCreateRequestData;
    /**
     * 
     * @type {Array<AppCustomProductPageCreateRequestIncludedInner>}
     * @memberof AppCustomProductPageCreateRequest
     */
    included?: Array<AppCustomProductPageCreateRequestIncludedInner>;
}

/**
 * Check if a given object implements the AppCustomProductPageCreateRequest interface.
 */
export function instanceOfAppCustomProductPageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppCustomProductPageCreateRequestFromJSON(json: any): AppCustomProductPageCreateRequest {
    return AppCustomProductPageCreateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageCreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageCreateRequestIncludedInnerFromJSON)),
    };
}

export function AppCustomProductPageCreateRequestToJSON(value?: AppCustomProductPageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageCreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCustomProductPageCreateRequestIncludedInnerToJSON)),
    };
}

