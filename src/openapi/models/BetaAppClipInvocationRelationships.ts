/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations } from './BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations';
import {
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsFromJSON,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsToJSON,
} from './BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationRelationships
 */
export interface BetaAppClipInvocationRelationships {
    /**
     * 
     * @type {BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations}
     * @memberof BetaAppClipInvocationRelationships
     */
    betaAppClipInvocationLocalizations?: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations;
}

/**
 * Check if a given object implements the BetaAppClipInvocationRelationships interface.
 */
export function instanceOfBetaAppClipInvocationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaAppClipInvocationRelationshipsFromJSON(json: any): BetaAppClipInvocationRelationships {
    return BetaAppClipInvocationRelationshipsFromJSONTyped(json, false);
}

export function BetaAppClipInvocationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'betaAppClipInvocationLocalizations': !exists(json, 'betaAppClipInvocationLocalizations') ? undefined : BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsFromJSON(json['betaAppClipInvocationLocalizations']),
    };
}

export function BetaAppClipInvocationRelationshipsToJSON(value?: BetaAppClipInvocationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'betaAppClipInvocationLocalizations': BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsToJSON(value.betaAppClipInvocationLocalizations),
    };
}
