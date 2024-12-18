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
import type { BetaAppClipInvocationLocalization } from './BetaAppClipInvocationLocalization';
import {
    BetaAppClipInvocationLocalizationFromJSON,
    BetaAppClipInvocationLocalizationFromJSONTyped,
    BetaAppClipInvocationLocalizationToJSON,
} from './BetaAppClipInvocationLocalization';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationResponse
 */
export interface BetaAppClipInvocationLocalizationResponse {
    /**
     * 
     * @type {BetaAppClipInvocationLocalization}
     * @memberof BetaAppClipInvocationLocalizationResponse
     */
    data: BetaAppClipInvocationLocalization;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaAppClipInvocationLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationResponse interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationResponseFromJSON(json: any): BetaAppClipInvocationLocalizationResponse {
    return BetaAppClipInvocationLocalizationResponseFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaAppClipInvocationLocalizationResponseToJSON(value?: BetaAppClipInvocationLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

