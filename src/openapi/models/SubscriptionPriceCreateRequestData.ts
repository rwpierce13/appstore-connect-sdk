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
import type { SubscriptionPriceCreateRequestDataRelationships } from './SubscriptionPriceCreateRequestDataRelationships';
import {
    SubscriptionPriceCreateRequestDataRelationshipsFromJSON,
    SubscriptionPriceCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionPriceCreateRequestDataRelationshipsToJSON,
} from './SubscriptionPriceCreateRequestDataRelationships';
import type { SubscriptionPriceInlineCreateAttributes } from './SubscriptionPriceInlineCreateAttributes';
import {
    SubscriptionPriceInlineCreateAttributesFromJSON,
    SubscriptionPriceInlineCreateAttributesFromJSONTyped,
    SubscriptionPriceInlineCreateAttributesToJSON,
} from './SubscriptionPriceInlineCreateAttributes';

/**
 * 
 * @export
 * @interface SubscriptionPriceCreateRequestData
 */
export interface SubscriptionPriceCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPriceCreateRequestData
     */
    type: SubscriptionPriceCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionPriceInlineCreateAttributes}
     * @memberof SubscriptionPriceCreateRequestData
     */
    attributes?: SubscriptionPriceInlineCreateAttributes;
    /**
     * 
     * @type {SubscriptionPriceCreateRequestDataRelationships}
     * @memberof SubscriptionPriceCreateRequestData
     */
    relationships: SubscriptionPriceCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionPriceCreateRequestDataTypeEnum = {
    SubscriptionPrices: 'subscriptionPrices'
} as const;
export type SubscriptionPriceCreateRequestDataTypeEnum = typeof SubscriptionPriceCreateRequestDataTypeEnum[keyof typeof SubscriptionPriceCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionPriceCreateRequestData interface.
 */
export function instanceOfSubscriptionPriceCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionPriceCreateRequestDataFromJSON(json: any): SubscriptionPriceCreateRequestData {
    return SubscriptionPriceCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionPriceCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionPriceInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionPriceCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPriceCreateRequestDataToJSON(value?: SubscriptionPriceCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': SubscriptionPriceInlineCreateAttributesToJSON(value.attributes),
        'relationships': SubscriptionPriceCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

