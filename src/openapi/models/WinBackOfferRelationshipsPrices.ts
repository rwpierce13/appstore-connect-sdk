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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';
import type { WinBackOfferRelationshipsPricesDataInner } from './WinBackOfferRelationshipsPricesDataInner';
import {
    WinBackOfferRelationshipsPricesDataInnerFromJSON,
    WinBackOfferRelationshipsPricesDataInnerFromJSONTyped,
    WinBackOfferRelationshipsPricesDataInnerToJSON,
} from './WinBackOfferRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface WinBackOfferRelationshipsPrices
 */
export interface WinBackOfferRelationshipsPrices {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof WinBackOfferRelationshipsPrices
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof WinBackOfferRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<WinBackOfferRelationshipsPricesDataInner>}
     * @memberof WinBackOfferRelationshipsPrices
     */
    data?: Array<WinBackOfferRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the WinBackOfferRelationshipsPrices interface.
 */
export function instanceOfWinBackOfferRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WinBackOfferRelationshipsPricesFromJSON(json: any): WinBackOfferRelationshipsPrices {
    return WinBackOfferRelationshipsPricesFromJSONTyped(json, false);
}

export function WinBackOfferRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(WinBackOfferRelationshipsPricesDataInnerFromJSON)),
    };
}

export function WinBackOfferRelationshipsPricesToJSON(value?: WinBackOfferRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(WinBackOfferRelationshipsPricesDataInnerToJSON)),
    };
}

