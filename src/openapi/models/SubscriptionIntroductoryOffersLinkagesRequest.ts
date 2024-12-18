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
import type { SubscriptionRelationshipsIntroductoryOffersDataInner } from './SubscriptionRelationshipsIntroductoryOffersDataInner';
import {
    SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON,
    SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSONTyped,
    SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON,
} from './SubscriptionRelationshipsIntroductoryOffersDataInner';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOffersLinkagesRequest
 */
export interface SubscriptionIntroductoryOffersLinkagesRequest {
    /**
     * 
     * @type {Array<SubscriptionRelationshipsIntroductoryOffersDataInner>}
     * @memberof SubscriptionIntroductoryOffersLinkagesRequest
     */
    data: Array<SubscriptionRelationshipsIntroductoryOffersDataInner>;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOffersLinkagesRequest interface.
 */
export function instanceOfSubscriptionIntroductoryOffersLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOffersLinkagesRequestFromJSON(json: any): SubscriptionIntroductoryOffersLinkagesRequest {
    return SubscriptionIntroductoryOffersLinkagesRequestFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOffersLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOffersLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON)),
    };
}

export function SubscriptionIntroductoryOffersLinkagesRequestToJSON(value?: SubscriptionIntroductoryOffersLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON)),
    };
}

