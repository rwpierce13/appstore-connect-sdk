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
import type { CustomerReviewResponseV1RelationshipsReview } from './CustomerReviewResponseV1RelationshipsReview';
import {
    CustomerReviewResponseV1RelationshipsReviewFromJSON,
    CustomerReviewResponseV1RelationshipsReviewFromJSONTyped,
    CustomerReviewResponseV1RelationshipsReviewToJSON,
} from './CustomerReviewResponseV1RelationshipsReview';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1Relationships
 */
export interface CustomerReviewResponseV1Relationships {
    /**
     * 
     * @type {CustomerReviewResponseV1RelationshipsReview}
     * @memberof CustomerReviewResponseV1Relationships
     */
    review?: CustomerReviewResponseV1RelationshipsReview;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1Relationships interface.
 */
export function instanceOfCustomerReviewResponseV1Relationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerReviewResponseV1RelationshipsFromJSON(json: any): CustomerReviewResponseV1Relationships {
    return CustomerReviewResponseV1RelationshipsFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1RelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1Relationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'review': !exists(json, 'review') ? undefined : CustomerReviewResponseV1RelationshipsReviewFromJSON(json['review']),
    };
}

export function CustomerReviewResponseV1RelationshipsToJSON(value?: CustomerReviewResponseV1Relationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'review': CustomerReviewResponseV1RelationshipsReviewToJSON(value.review),
    };
}
