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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaTesterInvitation
 */
export interface BetaTesterInvitation {
    /**
     * 
     * @type {string}
     * @memberof BetaTesterInvitation
     */
    type: BetaTesterInvitationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaTesterInvitation
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaTesterInvitation
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaTesterInvitationTypeEnum = {
    BetaTesterInvitations: 'betaTesterInvitations'
} as const;
export type BetaTesterInvitationTypeEnum = typeof BetaTesterInvitationTypeEnum[keyof typeof BetaTesterInvitationTypeEnum];


/**
 * Check if a given object implements the BetaTesterInvitation interface.
 */
export function instanceOfBetaTesterInvitation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaTesterInvitationFromJSON(json: any): BetaTesterInvitation {
    return BetaTesterInvitationFromJSONTyped(json, false);
}

export function BetaTesterInvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaTesterInvitationToJSON(value?: BetaTesterInvitation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'links': ResourceLinksToJSON(value.links),
    };
}

