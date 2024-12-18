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
import type { SubscriptionCreateRequestDataAttributes } from './SubscriptionCreateRequestDataAttributes';
import {
    SubscriptionCreateRequestDataAttributesFromJSON,
    SubscriptionCreateRequestDataAttributesFromJSONTyped,
    SubscriptionCreateRequestDataAttributesToJSON,
} from './SubscriptionCreateRequestDataAttributes';
import type { SubscriptionCreateRequestDataRelationships } from './SubscriptionCreateRequestDataRelationships';
import {
    SubscriptionCreateRequestDataRelationshipsFromJSON,
    SubscriptionCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionCreateRequestDataRelationshipsToJSON,
} from './SubscriptionCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionCreateRequestData
 */
export interface SubscriptionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreateRequestData
     */
    type: SubscriptionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionCreateRequestDataAttributes}
     * @memberof SubscriptionCreateRequestData
     */
    attributes: SubscriptionCreateRequestDataAttributes;
    /**
     * 
     * @type {SubscriptionCreateRequestDataRelationships}
     * @memberof SubscriptionCreateRequestData
     */
    relationships: SubscriptionCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionCreateRequestDataTypeEnum = {
    Subscriptions: 'subscriptions'
} as const;
export type SubscriptionCreateRequestDataTypeEnum = typeof SubscriptionCreateRequestDataTypeEnum[keyof typeof SubscriptionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionCreateRequestData interface.
 */
export function instanceOfSubscriptionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionCreateRequestDataFromJSON(json: any): SubscriptionCreateRequestData {
    return SubscriptionCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': SubscriptionCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionCreateRequestDataToJSON(value?: SubscriptionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': SubscriptionCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': SubscriptionCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

