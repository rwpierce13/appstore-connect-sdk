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
 * @interface BetaLicenseAgreementAttributes
 */
export interface BetaLicenseAgreementAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreementAttributes
     */
    agreementText?: string;
}

/**
 * Check if a given object implements the BetaLicenseAgreementAttributes interface.
 */
export function instanceOfBetaLicenseAgreementAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaLicenseAgreementAttributesFromJSON(json: any): BetaLicenseAgreementAttributes {
    return BetaLicenseAgreementAttributesFromJSONTyped(json, false);
}

export function BetaLicenseAgreementAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agreementText': !exists(json, 'agreementText') ? undefined : json['agreementText'],
    };
}

export function BetaLicenseAgreementAttributesToJSON(value?: BetaLicenseAgreementAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agreementText': value.agreementText,
    };
}

