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
import type { MarketplaceWebhookCreateRequestDataAttributes } from './MarketplaceWebhookCreateRequestDataAttributes';
import {
    MarketplaceWebhookCreateRequestDataAttributesFromJSON,
    MarketplaceWebhookCreateRequestDataAttributesFromJSONTyped,
    MarketplaceWebhookCreateRequestDataAttributesToJSON,
} from './MarketplaceWebhookCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface MarketplaceWebhookCreateRequestData
 */
export interface MarketplaceWebhookCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhookCreateRequestData
     */
    type: MarketplaceWebhookCreateRequestDataTypeEnum;
    /**
     * 
     * @type {MarketplaceWebhookCreateRequestDataAttributes}
     * @memberof MarketplaceWebhookCreateRequestData
     */
    attributes: MarketplaceWebhookCreateRequestDataAttributes;
}


/**
 * @export
 */
export const MarketplaceWebhookCreateRequestDataTypeEnum = {
    MarketplaceWebhooks: 'marketplaceWebhooks'
} as const;
export type MarketplaceWebhookCreateRequestDataTypeEnum = typeof MarketplaceWebhookCreateRequestDataTypeEnum[keyof typeof MarketplaceWebhookCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the MarketplaceWebhookCreateRequestData interface.
 */
export function instanceOfMarketplaceWebhookCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function MarketplaceWebhookCreateRequestDataFromJSON(json: any): MarketplaceWebhookCreateRequestData {
    return MarketplaceWebhookCreateRequestDataFromJSONTyped(json, false);
}

export function MarketplaceWebhookCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': MarketplaceWebhookCreateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function MarketplaceWebhookCreateRequestDataToJSON(value?: MarketplaceWebhookCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': MarketplaceWebhookCreateRequestDataAttributesToJSON(value.attributes),
    };
}
