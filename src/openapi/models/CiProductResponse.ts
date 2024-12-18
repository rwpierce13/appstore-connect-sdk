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
import type { CiProduct } from './CiProduct';
import {
    CiProductFromJSON,
    CiProductFromJSONTyped,
    CiProductToJSON,
} from './CiProduct';
import type { CiProductsResponseIncludedInner } from './CiProductsResponseIncludedInner';
import {
    CiProductsResponseIncludedInnerFromJSON,
    CiProductsResponseIncludedInnerFromJSONTyped,
    CiProductsResponseIncludedInnerToJSON,
} from './CiProductsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CiProductResponse
 */
export interface CiProductResponse {
    /**
     * 
     * @type {CiProduct}
     * @memberof CiProductResponse
     */
    data: CiProduct;
    /**
     * 
     * @type {Array<CiProductsResponseIncludedInner>}
     * @memberof CiProductResponse
     */
    included?: Array<CiProductsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiProductResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiProductResponse interface.
 */
export function instanceOfCiProductResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiProductResponseFromJSON(json: any): CiProductResponse {
    return CiProductResponseFromJSONTyped(json, false);
}

export function CiProductResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CiProductFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CiProductsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiProductResponseToJSON(value?: CiProductResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiProductToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CiProductsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

