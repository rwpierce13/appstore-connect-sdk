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
import type { ReviewSubmissionItemCreateRequestDataRelationships } from './ReviewSubmissionItemCreateRequestDataRelationships';
import {
    ReviewSubmissionItemCreateRequestDataRelationshipsFromJSON,
    ReviewSubmissionItemCreateRequestDataRelationshipsFromJSONTyped,
    ReviewSubmissionItemCreateRequestDataRelationshipsToJSON,
} from './ReviewSubmissionItemCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemCreateRequestData
 */
export interface ReviewSubmissionItemCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionItemCreateRequestData
     */
    type: ReviewSubmissionItemCreateRequestDataTypeEnum;
    /**
     * 
     * @type {ReviewSubmissionItemCreateRequestDataRelationships}
     * @memberof ReviewSubmissionItemCreateRequestData
     */
    relationships: ReviewSubmissionItemCreateRequestDataRelationships;
}


/**
 * @export
 */
export const ReviewSubmissionItemCreateRequestDataTypeEnum = {
    ReviewSubmissionItems: 'reviewSubmissionItems'
} as const;
export type ReviewSubmissionItemCreateRequestDataTypeEnum = typeof ReviewSubmissionItemCreateRequestDataTypeEnum[keyof typeof ReviewSubmissionItemCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequestData interface.
 */
export function instanceOfReviewSubmissionItemCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function ReviewSubmissionItemCreateRequestDataFromJSON(json: any): ReviewSubmissionItemCreateRequestData {
    return ReviewSubmissionItemCreateRequestDataFromJSONTyped(json, false);
}

export function ReviewSubmissionItemCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': ReviewSubmissionItemCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function ReviewSubmissionItemCreateRequestDataToJSON(value?: ReviewSubmissionItemCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': ReviewSubmissionItemCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

