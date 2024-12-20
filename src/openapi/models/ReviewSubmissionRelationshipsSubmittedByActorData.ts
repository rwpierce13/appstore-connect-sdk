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
/**
 * 
 * @export
 * @interface ReviewSubmissionRelationshipsSubmittedByActorData
 */
export interface ReviewSubmissionRelationshipsSubmittedByActorData {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionRelationshipsSubmittedByActorData
     */
    type: ReviewSubmissionRelationshipsSubmittedByActorDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionRelationshipsSubmittedByActorData
     */
    id: string;
}


/**
 * @export
 */
export const ReviewSubmissionRelationshipsSubmittedByActorDataTypeEnum = {
    Actors: 'actors'
} as const;
export type ReviewSubmissionRelationshipsSubmittedByActorDataTypeEnum = typeof ReviewSubmissionRelationshipsSubmittedByActorDataTypeEnum[keyof typeof ReviewSubmissionRelationshipsSubmittedByActorDataTypeEnum];


/**
 * Check if a given object implements the ReviewSubmissionRelationshipsSubmittedByActorData interface.
 */
export function instanceOfReviewSubmissionRelationshipsSubmittedByActorData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReviewSubmissionRelationshipsSubmittedByActorDataFromJSON(json: any): ReviewSubmissionRelationshipsSubmittedByActorData {
    return ReviewSubmissionRelationshipsSubmittedByActorDataFromJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsSubmittedByActorDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionRelationshipsSubmittedByActorData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function ReviewSubmissionRelationshipsSubmittedByActorDataToJSON(value?: ReviewSubmissionRelationshipsSubmittedByActorData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

