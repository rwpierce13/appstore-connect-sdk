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
import type { AppPreviewCreateRequestDataRelationshipsAppPreviewSet } from './AppPreviewCreateRequestDataRelationshipsAppPreviewSet';
import {
    AppPreviewCreateRequestDataRelationshipsAppPreviewSetFromJSON,
    AppPreviewCreateRequestDataRelationshipsAppPreviewSetFromJSONTyped,
    AppPreviewCreateRequestDataRelationshipsAppPreviewSetToJSON,
} from './AppPreviewCreateRequestDataRelationshipsAppPreviewSet';

/**
 * 
 * @export
 * @interface AppPreviewCreateRequestDataRelationships
 */
export interface AppPreviewCreateRequestDataRelationships {
    /**
     * 
     * @type {AppPreviewCreateRequestDataRelationshipsAppPreviewSet}
     * @memberof AppPreviewCreateRequestDataRelationships
     */
    appPreviewSet: AppPreviewCreateRequestDataRelationshipsAppPreviewSet;
}

/**
 * Check if a given object implements the AppPreviewCreateRequestDataRelationships interface.
 */
export function instanceOfAppPreviewCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appPreviewSet" in value;

    return isInstance;
}

export function AppPreviewCreateRequestDataRelationshipsFromJSON(json: any): AppPreviewCreateRequestDataRelationships {
    return AppPreviewCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppPreviewCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appPreviewSet': AppPreviewCreateRequestDataRelationshipsAppPreviewSetFromJSON(json['appPreviewSet']),
    };
}

export function AppPreviewCreateRequestDataRelationshipsToJSON(value?: AppPreviewCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appPreviewSet': AppPreviewCreateRequestDataRelationshipsAppPreviewSetToJSON(value.appPreviewSet),
    };
}

