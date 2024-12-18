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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';
import type { SubscriptionRelationshipsAppStoreReviewScreenshotData } from './SubscriptionRelationshipsAppStoreReviewScreenshotData';
import {
    SubscriptionRelationshipsAppStoreReviewScreenshotDataFromJSON,
    SubscriptionRelationshipsAppStoreReviewScreenshotDataFromJSONTyped,
    SubscriptionRelationshipsAppStoreReviewScreenshotDataToJSON,
} from './SubscriptionRelationshipsAppStoreReviewScreenshotData';

/**
 * 
 * @export
 * @interface SubscriptionRelationshipsAppStoreReviewScreenshot
 */
export interface SubscriptionRelationshipsAppStoreReviewScreenshot {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionRelationshipsAppStoreReviewScreenshot
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {SubscriptionRelationshipsAppStoreReviewScreenshotData}
     * @memberof SubscriptionRelationshipsAppStoreReviewScreenshot
     */
    data?: SubscriptionRelationshipsAppStoreReviewScreenshotData;
}

/**
 * Check if a given object implements the SubscriptionRelationshipsAppStoreReviewScreenshot interface.
 */
export function instanceOfSubscriptionRelationshipsAppStoreReviewScreenshot(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON(json: any): SubscriptionRelationshipsAppStoreReviewScreenshot {
    return SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsAppStoreReviewScreenshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : SubscriptionRelationshipsAppStoreReviewScreenshotDataFromJSON(json['data']),
    };
}

export function SubscriptionRelationshipsAppStoreReviewScreenshotToJSON(value?: SubscriptionRelationshipsAppStoreReviewScreenshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': SubscriptionRelationshipsAppStoreReviewScreenshotDataToJSON(value.data),
    };
}

