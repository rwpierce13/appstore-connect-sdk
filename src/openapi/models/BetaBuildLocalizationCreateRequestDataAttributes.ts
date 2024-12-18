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
/**
 * 
 * @export
 * @interface BetaBuildLocalizationCreateRequestDataAttributes
 */
export interface BetaBuildLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationCreateRequestDataAttributes
     */
    whatsNew?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationCreateRequestDataAttributes
     */
    locale: string;
}

/**
 * Check if a given object implements the BetaBuildLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfBetaBuildLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function BetaBuildLocalizationCreateRequestDataAttributesFromJSON(json: any): BetaBuildLocalizationCreateRequestDataAttributes {
    return BetaBuildLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaBuildLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'whatsNew': !exists(json, 'whatsNew') ? undefined : json['whatsNew'],
        'locale': json['locale'],
    };
}

export function BetaBuildLocalizationCreateRequestDataAttributesToJSON(value?: BetaBuildLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'whatsNew': value.whatsNew,
        'locale': value.locale,
    };
}

