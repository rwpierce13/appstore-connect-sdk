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
import type { BetaTesterInvitation } from './BetaTesterInvitation';
import {
    BetaTesterInvitationFromJSON,
    BetaTesterInvitationFromJSONTyped,
    BetaTesterInvitationToJSON,
} from './BetaTesterInvitation';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BetaTesterInvitationResponse
 */
export interface BetaTesterInvitationResponse {
    /**
     * 
     * @type {BetaTesterInvitation}
     * @memberof BetaTesterInvitationResponse
     */
    data: BetaTesterInvitation;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaTesterInvitationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaTesterInvitationResponse interface.
 */
export function instanceOfBetaTesterInvitationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaTesterInvitationResponseFromJSON(json: any): BetaTesterInvitationResponse {
    return BetaTesterInvitationResponseFromJSONTyped(json, false);
}

export function BetaTesterInvitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaTesterInvitationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaTesterInvitationResponseToJSON(value?: BetaTesterInvitationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaTesterInvitationToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}
