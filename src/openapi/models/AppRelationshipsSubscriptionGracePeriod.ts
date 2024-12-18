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
import type { AppRelationshipsSubscriptionGracePeriodData } from './AppRelationshipsSubscriptionGracePeriodData';
import {
    AppRelationshipsSubscriptionGracePeriodDataFromJSON,
    AppRelationshipsSubscriptionGracePeriodDataFromJSONTyped,
    AppRelationshipsSubscriptionGracePeriodDataToJSON,
} from './AppRelationshipsSubscriptionGracePeriodData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppRelationshipsSubscriptionGracePeriod
 */
export interface AppRelationshipsSubscriptionGracePeriod {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsSubscriptionGracePeriod
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsSubscriptionGracePeriodData}
     * @memberof AppRelationshipsSubscriptionGracePeriod
     */
    data?: AppRelationshipsSubscriptionGracePeriodData;
}

/**
 * Check if a given object implements the AppRelationshipsSubscriptionGracePeriod interface.
 */
export function instanceOfAppRelationshipsSubscriptionGracePeriod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsSubscriptionGracePeriodFromJSON(json: any): AppRelationshipsSubscriptionGracePeriod {
    return AppRelationshipsSubscriptionGracePeriodFromJSONTyped(json, false);
}

export function AppRelationshipsSubscriptionGracePeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsSubscriptionGracePeriod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppRelationshipsSubscriptionGracePeriodDataFromJSON(json['data']),
    };
}

export function AppRelationshipsSubscriptionGracePeriodToJSON(value?: AppRelationshipsSubscriptionGracePeriod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppRelationshipsSubscriptionGracePeriodDataToJSON(value.data),
    };
}

