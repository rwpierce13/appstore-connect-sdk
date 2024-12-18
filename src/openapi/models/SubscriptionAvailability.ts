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
import type { AppAvailabilityV2Attributes } from './AppAvailabilityV2Attributes';
import {
    AppAvailabilityV2AttributesFromJSON,
    AppAvailabilityV2AttributesFromJSONTyped,
    AppAvailabilityV2AttributesToJSON,
} from './AppAvailabilityV2Attributes';
import type { InAppPurchaseAvailabilityRelationships } from './InAppPurchaseAvailabilityRelationships';
import {
    InAppPurchaseAvailabilityRelationshipsFromJSON,
    InAppPurchaseAvailabilityRelationshipsFromJSONTyped,
    InAppPurchaseAvailabilityRelationshipsToJSON,
} from './InAppPurchaseAvailabilityRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface SubscriptionAvailability
 */
export interface SubscriptionAvailability {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAvailability
     */
    type: SubscriptionAvailabilityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAvailability
     */
    id: string;
    /**
     * 
     * @type {AppAvailabilityV2Attributes}
     * @memberof SubscriptionAvailability
     */
    attributes?: AppAvailabilityV2Attributes;
    /**
     * 
     * @type {InAppPurchaseAvailabilityRelationships}
     * @memberof SubscriptionAvailability
     */
    relationships?: InAppPurchaseAvailabilityRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionAvailability
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionAvailabilityTypeEnum = {
    SubscriptionAvailabilities: 'subscriptionAvailabilities'
} as const;
export type SubscriptionAvailabilityTypeEnum = typeof SubscriptionAvailabilityTypeEnum[keyof typeof SubscriptionAvailabilityTypeEnum];


/**
 * Check if a given object implements the SubscriptionAvailability interface.
 */
export function instanceOfSubscriptionAvailability(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionAvailabilityFromJSON(json: any): SubscriptionAvailability {
    return SubscriptionAvailabilityFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailability {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppAvailabilityV2AttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchaseAvailabilityRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionAvailabilityToJSON(value?: SubscriptionAvailability | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppAvailabilityV2AttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAvailabilityRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

