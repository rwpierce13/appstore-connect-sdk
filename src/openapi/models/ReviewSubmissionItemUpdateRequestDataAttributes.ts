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
 * @interface ReviewSubmissionItemUpdateRequestDataAttributes
 */
export interface ReviewSubmissionItemUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof ReviewSubmissionItemUpdateRequestDataAttributes
     */
    resolved?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReviewSubmissionItemUpdateRequestDataAttributes
     */
    removed?: boolean;
}

/**
 * Check if a given object implements the ReviewSubmissionItemUpdateRequestDataAttributes interface.
 */
export function instanceOfReviewSubmissionItemUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionItemUpdateRequestDataAttributesFromJSON(json: any): ReviewSubmissionItemUpdateRequestDataAttributes {
    return ReviewSubmissionItemUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function ReviewSubmissionItemUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resolved': !exists(json, 'resolved') ? undefined : json['resolved'],
        'removed': !exists(json, 'removed') ? undefined : json['removed'],
    };
}

export function ReviewSubmissionItemUpdateRequestDataAttributesToJSON(value?: ReviewSubmissionItemUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resolved': value.resolved,
        'removed': value.removed,
    };
}

