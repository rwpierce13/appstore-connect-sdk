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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import type { AppCustomProductPageRelationshipsAppCustomProductPageVersions } from './AppCustomProductPageRelationshipsAppCustomProductPageVersions';
import {
    AppCustomProductPageRelationshipsAppCustomProductPageVersionsFromJSON,
    AppCustomProductPageRelationshipsAppCustomProductPageVersionsFromJSONTyped,
    AppCustomProductPageRelationshipsAppCustomProductPageVersionsToJSON,
} from './AppCustomProductPageRelationshipsAppCustomProductPageVersions';

/**
 * 
 * @export
 * @interface AppCustomProductPageRelationships
 */
export interface AppCustomProductPageRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AppCustomProductPageRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppCustomProductPageRelationshipsAppCustomProductPageVersions}
     * @memberof AppCustomProductPageRelationships
     */
    appCustomProductPageVersions?: AppCustomProductPageRelationshipsAppCustomProductPageVersions;
}

/**
 * Check if a given object implements the AppCustomProductPageRelationships interface.
 */
export function instanceOfAppCustomProductPageRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageRelationshipsFromJSON(json: any): AppCustomProductPageRelationships {
    return AppCustomProductPageRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'appCustomProductPageVersions': !exists(json, 'appCustomProductPageVersions') ? undefined : AppCustomProductPageRelationshipsAppCustomProductPageVersionsFromJSON(json['appCustomProductPageVersions']),
    };
}

export function AppCustomProductPageRelationshipsToJSON(value?: AppCustomProductPageRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value.app),
        'appCustomProductPageVersions': AppCustomProductPageRelationshipsAppCustomProductPageVersionsToJSON(value.appCustomProductPageVersions),
    };
}

