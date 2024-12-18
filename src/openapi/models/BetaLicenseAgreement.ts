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
import type { BetaAppLocalizationRelationships } from './BetaAppLocalizationRelationships';
import {
    BetaAppLocalizationRelationshipsFromJSON,
    BetaAppLocalizationRelationshipsFromJSONTyped,
    BetaAppLocalizationRelationshipsToJSON,
} from './BetaAppLocalizationRelationships';
import type { BetaLicenseAgreementAttributes } from './BetaLicenseAgreementAttributes';
import {
    BetaLicenseAgreementAttributesFromJSON,
    BetaLicenseAgreementAttributesFromJSONTyped,
    BetaLicenseAgreementAttributesToJSON,
} from './BetaLicenseAgreementAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaLicenseAgreement
 */
export interface BetaLicenseAgreement {
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreement
     */
    type: BetaLicenseAgreementTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreement
     */
    id: string;
    /**
     * 
     * @type {BetaLicenseAgreementAttributes}
     * @memberof BetaLicenseAgreement
     */
    attributes?: BetaLicenseAgreementAttributes;
    /**
     * 
     * @type {BetaAppLocalizationRelationships}
     * @memberof BetaLicenseAgreement
     */
    relationships?: BetaAppLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaLicenseAgreement
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaLicenseAgreementTypeEnum = {
    BetaLicenseAgreements: 'betaLicenseAgreements'
} as const;
export type BetaLicenseAgreementTypeEnum = typeof BetaLicenseAgreementTypeEnum[keyof typeof BetaLicenseAgreementTypeEnum];


/**
 * Check if a given object implements the BetaLicenseAgreement interface.
 */
export function instanceOfBetaLicenseAgreement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaLicenseAgreementFromJSON(json: any): BetaLicenseAgreement {
    return BetaLicenseAgreementFromJSONTyped(json, false);
}

export function BetaLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaLicenseAgreementAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BetaAppLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaLicenseAgreementToJSON(value?: BetaLicenseAgreement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaLicenseAgreementAttributesToJSON(value.attributes),
        'relationships': BetaAppLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

