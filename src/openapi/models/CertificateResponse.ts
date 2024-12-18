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
import type { Certificate } from './Certificate';
import {
    CertificateFromJSON,
    CertificateFromJSONTyped,
    CertificateToJSON,
} from './Certificate';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CertificateResponse
 */
export interface CertificateResponse {
    /**
     * 
     * @type {Certificate}
     * @memberof CertificateResponse
     */
    data: Certificate;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CertificateResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CertificateResponse interface.
 */
export function instanceOfCertificateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CertificateResponseFromJSON(json: any): CertificateResponse {
    return CertificateResponseFromJSONTyped(json, false);
}

export function CertificateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CertificateFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CertificateResponseToJSON(value?: CertificateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CertificateToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

