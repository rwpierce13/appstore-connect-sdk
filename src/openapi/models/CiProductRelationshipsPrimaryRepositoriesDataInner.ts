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
 * @interface CiProductRelationshipsPrimaryRepositoriesDataInner
 */
export interface CiProductRelationshipsPrimaryRepositoriesDataInner {
    /**
     * 
     * @type {string}
     * @memberof CiProductRelationshipsPrimaryRepositoriesDataInner
     */
    type: CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiProductRelationshipsPrimaryRepositoriesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum = {
    ScmRepositories: 'scmRepositories'
} as const;
export type CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum = typeof CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum[keyof typeof CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum];


/**
 * Check if a given object implements the CiProductRelationshipsPrimaryRepositoriesDataInner interface.
 */
export function instanceOfCiProductRelationshipsPrimaryRepositoriesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON(json: any): CiProductRelationshipsPrimaryRepositoriesDataInner {
    return CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped(json, false);
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsPrimaryRepositoriesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON(value?: CiProductRelationshipsPrimaryRepositoriesDataInner | null): any {
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

