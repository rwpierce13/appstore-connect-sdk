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
import type { SubscriptionGroupLocalizationCreateRequestDataRelationships } from './SubscriptionGroupLocalizationCreateRequestDataRelationships';
import {
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSON,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSON,
} from './SubscriptionGroupLocalizationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionGroupSubmissionCreateRequestData
 */
export interface SubscriptionGroupSubmissionCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupSubmissionCreateRequestData
     */
    type: SubscriptionGroupSubmissionCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionGroupLocalizationCreateRequestDataRelationships}
     * @memberof SubscriptionGroupSubmissionCreateRequestData
     */
    relationships: SubscriptionGroupLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionGroupSubmissionCreateRequestDataTypeEnum = {
    SubscriptionGroupSubmissions: 'subscriptionGroupSubmissions'
} as const;
export type SubscriptionGroupSubmissionCreateRequestDataTypeEnum = typeof SubscriptionGroupSubmissionCreateRequestDataTypeEnum[keyof typeof SubscriptionGroupSubmissionCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupSubmissionCreateRequestData interface.
 */
export function instanceOfSubscriptionGroupSubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionGroupSubmissionCreateRequestDataFromJSON(json: any): SubscriptionGroupSubmissionCreateRequestData {
    return SubscriptionGroupSubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionGroupSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupSubmissionCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionGroupSubmissionCreateRequestDataToJSON(value?: SubscriptionGroupSubmissionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

