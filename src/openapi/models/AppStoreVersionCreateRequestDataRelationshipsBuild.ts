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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface AppStoreVersionCreateRequestDataRelationshipsBuild
 */
export interface AppStoreVersionCreateRequestDataRelationshipsBuild {
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuildsDataInner}
     * @memberof AppStoreVersionCreateRequestDataRelationshipsBuild
     */
    data?: AppEncryptionDeclarationRelationshipsBuildsDataInner;
}

/**
 * Check if a given object implements the AppStoreVersionCreateRequestDataRelationshipsBuild interface.
 */
export function instanceOfAppStoreVersionCreateRequestDataRelationshipsBuild(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON(json: any): AppStoreVersionCreateRequestDataRelationshipsBuild {
    return AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionCreateRequestDataRelationshipsBuild {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON(json['data']),
    };
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildToJSON(value?: AppStoreVersionCreateRequestDataRelationshipsBuild | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON(value.data),
    };
}
