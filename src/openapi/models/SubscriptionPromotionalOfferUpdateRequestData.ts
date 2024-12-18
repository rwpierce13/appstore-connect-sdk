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
import type { SubscriptionPromotionalOfferUpdateRequestDataRelationships } from './SubscriptionPromotionalOfferUpdateRequestDataRelationships';
import {
    SubscriptionPromotionalOfferUpdateRequestDataRelationshipsFromJSON,
    SubscriptionPromotionalOfferUpdateRequestDataRelationshipsFromJSONTyped,
    SubscriptionPromotionalOfferUpdateRequestDataRelationshipsToJSON,
} from './SubscriptionPromotionalOfferUpdateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferUpdateRequestData
 */
export interface SubscriptionPromotionalOfferUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferUpdateRequestData
     */
    type: SubscriptionPromotionalOfferUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SubscriptionPromotionalOfferUpdateRequestDataRelationships}
     * @memberof SubscriptionPromotionalOfferUpdateRequestData
     */
    relationships?: SubscriptionPromotionalOfferUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferUpdateRequestDataTypeEnum = {
    SubscriptionPromotionalOffers: 'subscriptionPromotionalOffers'
} as const;
export type SubscriptionPromotionalOfferUpdateRequestDataTypeEnum = typeof SubscriptionPromotionalOfferUpdateRequestDataTypeEnum[keyof typeof SubscriptionPromotionalOfferUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferUpdateRequestData interface.
 */
export function instanceOfSubscriptionPromotionalOfferUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferUpdateRequestDataFromJSON(json: any): SubscriptionPromotionalOfferUpdateRequestData {
    return SubscriptionPromotionalOfferUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionPromotionalOfferUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPromotionalOfferUpdateRequestDataToJSON(value?: SubscriptionPromotionalOfferUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': SubscriptionPromotionalOfferUpdateRequestDataRelationshipsToJSON(value.relationships),
    };
}

