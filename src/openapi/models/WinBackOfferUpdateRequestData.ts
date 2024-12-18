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
import type { WinBackOfferUpdateRequestDataAttributes } from './WinBackOfferUpdateRequestDataAttributes';
import {
    WinBackOfferUpdateRequestDataAttributesFromJSON,
    WinBackOfferUpdateRequestDataAttributesFromJSONTyped,
    WinBackOfferUpdateRequestDataAttributesToJSON,
} from './WinBackOfferUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface WinBackOfferUpdateRequestData
 */
export interface WinBackOfferUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferUpdateRequestData
     */
    type: WinBackOfferUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {WinBackOfferUpdateRequestDataAttributes}
     * @memberof WinBackOfferUpdateRequestData
     */
    attributes?: WinBackOfferUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const WinBackOfferUpdateRequestDataTypeEnum = {
    WinBackOffers: 'winBackOffers'
} as const;
export type WinBackOfferUpdateRequestDataTypeEnum = typeof WinBackOfferUpdateRequestDataTypeEnum[keyof typeof WinBackOfferUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the WinBackOfferUpdateRequestData interface.
 */
export function instanceOfWinBackOfferUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function WinBackOfferUpdateRequestDataFromJSON(json: any): WinBackOfferUpdateRequestData {
    return WinBackOfferUpdateRequestDataFromJSONTyped(json, false);
}

export function WinBackOfferUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : WinBackOfferUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function WinBackOfferUpdateRequestDataToJSON(value?: WinBackOfferUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': WinBackOfferUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

