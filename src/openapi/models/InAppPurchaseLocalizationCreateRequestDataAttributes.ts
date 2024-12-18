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
 * @interface InAppPurchaseLocalizationCreateRequestDataAttributes
 */
export interface InAppPurchaseLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationCreateRequestDataAttributes
     */
    description?: string;
}

/**
 * Check if a given object implements the InAppPurchaseLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfInAppPurchaseLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function InAppPurchaseLocalizationCreateRequestDataAttributesFromJSON(json: any): InAppPurchaseLocalizationCreateRequestDataAttributes {
    return InAppPurchaseLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'locale': json['locale'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function InAppPurchaseLocalizationCreateRequestDataAttributesToJSON(value?: InAppPurchaseLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'locale': value.locale,
        'description': value.description,
    };
}

