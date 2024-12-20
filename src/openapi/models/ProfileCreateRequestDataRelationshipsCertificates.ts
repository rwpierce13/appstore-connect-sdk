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
import type { ProfileRelationshipsCertificatesDataInner } from './ProfileRelationshipsCertificatesDataInner';
import {
    ProfileRelationshipsCertificatesDataInnerFromJSON,
    ProfileRelationshipsCertificatesDataInnerFromJSONTyped,
    ProfileRelationshipsCertificatesDataInnerToJSON,
} from './ProfileRelationshipsCertificatesDataInner';

/**
 * 
 * @export
 * @interface ProfileCreateRequestDataRelationshipsCertificates
 */
export interface ProfileCreateRequestDataRelationshipsCertificates {
    /**
     * 
     * @type {Array<ProfileRelationshipsCertificatesDataInner>}
     * @memberof ProfileCreateRequestDataRelationshipsCertificates
     */
    data: Array<ProfileRelationshipsCertificatesDataInner>;
}

/**
 * Check if a given object implements the ProfileCreateRequestDataRelationshipsCertificates interface.
 */
export function instanceOfProfileCreateRequestDataRelationshipsCertificates(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ProfileCreateRequestDataRelationshipsCertificatesFromJSON(json: any): ProfileCreateRequestDataRelationshipsCertificates {
    return ProfileCreateRequestDataRelationshipsCertificatesFromJSONTyped(json, false);
}

export function ProfileCreateRequestDataRelationshipsCertificatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateRequestDataRelationshipsCertificates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ProfileRelationshipsCertificatesDataInnerFromJSON)),
    };
}

export function ProfileCreateRequestDataRelationshipsCertificatesToJSON(value?: ProfileCreateRequestDataRelationshipsCertificates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ProfileRelationshipsCertificatesDataInnerToJSON)),
    };
}

