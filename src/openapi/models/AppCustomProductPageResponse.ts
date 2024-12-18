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
import type { AppCustomProductPage } from './AppCustomProductPage';
import {
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
} from './AppCustomProductPage';
import type { AppCustomProductPagesResponseIncludedInner } from './AppCustomProductPagesResponseIncludedInner';
import {
    AppCustomProductPagesResponseIncludedInnerFromJSON,
    AppCustomProductPagesResponseIncludedInnerFromJSONTyped,
    AppCustomProductPagesResponseIncludedInnerToJSON,
} from './AppCustomProductPagesResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppCustomProductPageResponse
 */
export interface AppCustomProductPageResponse {
    /**
     * 
     * @type {AppCustomProductPage}
     * @memberof AppCustomProductPageResponse
     */
    data: AppCustomProductPage;
    /**
     * 
     * @type {Array<AppCustomProductPagesResponseIncludedInner>}
     * @memberof AppCustomProductPageResponse
     */
    included?: Array<AppCustomProductPagesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCustomProductPageResponse interface.
 */
export function instanceOfAppCustomProductPageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCustomProductPageResponseFromJSON(json: any): AppCustomProductPageResponse {
    return AppCustomProductPageResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPagesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageResponseToJSON(value?: AppCustomProductPageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCustomProductPagesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

