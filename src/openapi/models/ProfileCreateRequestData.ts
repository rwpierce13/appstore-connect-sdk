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
import type { ProfileCreateRequestDataAttributes } from './ProfileCreateRequestDataAttributes';
import {
    ProfileCreateRequestDataAttributesFromJSON,
    ProfileCreateRequestDataAttributesFromJSONTyped,
    ProfileCreateRequestDataAttributesToJSON,
} from './ProfileCreateRequestDataAttributes';
import type { ProfileCreateRequestDataRelationships } from './ProfileCreateRequestDataRelationships';
import {
    ProfileCreateRequestDataRelationshipsFromJSON,
    ProfileCreateRequestDataRelationshipsFromJSONTyped,
    ProfileCreateRequestDataRelationshipsToJSON,
} from './ProfileCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface ProfileCreateRequestData
 */
export interface ProfileCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof ProfileCreateRequestData
     */
    type: ProfileCreateRequestDataTypeEnum;
    /**
     * 
     * @type {ProfileCreateRequestDataAttributes}
     * @memberof ProfileCreateRequestData
     */
    attributes: ProfileCreateRequestDataAttributes;
    /**
     * 
     * @type {ProfileCreateRequestDataRelationships}
     * @memberof ProfileCreateRequestData
     */
    relationships: ProfileCreateRequestDataRelationships;
}


/**
 * @export
 */
export const ProfileCreateRequestDataTypeEnum = {
    Profiles: 'profiles'
} as const;
export type ProfileCreateRequestDataTypeEnum = typeof ProfileCreateRequestDataTypeEnum[keyof typeof ProfileCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the ProfileCreateRequestData interface.
 */
export function instanceOfProfileCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function ProfileCreateRequestDataFromJSON(json: any): ProfileCreateRequestData {
    return ProfileCreateRequestDataFromJSONTyped(json, false);
}

export function ProfileCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': ProfileCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': ProfileCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function ProfileCreateRequestDataToJSON(value?: ProfileCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': ProfileCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': ProfileCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

