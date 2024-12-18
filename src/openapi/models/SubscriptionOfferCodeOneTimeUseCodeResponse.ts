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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
} from './SubscriptionOfferCode';
import type { SubscriptionOfferCodeOneTimeUseCode } from './SubscriptionOfferCodeOneTimeUseCode';
import {
    SubscriptionOfferCodeOneTimeUseCodeFromJSON,
    SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped,
    SubscriptionOfferCodeOneTimeUseCodeToJSON,
} from './SubscriptionOfferCodeOneTimeUseCode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodeResponse
 */
export interface SubscriptionOfferCodeOneTimeUseCodeResponse {
    /**
     * 
     * @type {SubscriptionOfferCodeOneTimeUseCode}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    data: SubscriptionOfferCodeOneTimeUseCode;
    /**
     * 
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeResponse interface.
 */
export function instanceOfSubscriptionOfferCodeOneTimeUseCodeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeResponse {
    return SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeOneTimeUseCodeFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodeFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionOfferCodeOneTimeUseCodeResponseToJSON(value?: SubscriptionOfferCodeOneTimeUseCodeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeOneTimeUseCodeToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodeToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

