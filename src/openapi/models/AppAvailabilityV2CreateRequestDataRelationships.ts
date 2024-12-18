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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON,
} from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import type { AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities } from './AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities';
import {
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSON,
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSONTyped,
    AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesToJSON,
} from './AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities';

/**
 * 
 * @export
 * @interface AppAvailabilityV2CreateRequestDataRelationships
 */
export interface AppAvailabilityV2CreateRequestDataRelationships {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AppAvailabilityV2CreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities}
     * @memberof AppAvailabilityV2CreateRequestDataRelationships
     */
    territoryAvailabilities: AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities;
}

/**
 * Check if a given object implements the AppAvailabilityV2CreateRequestDataRelationships interface.
 */
export function instanceOfAppAvailabilityV2CreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "territoryAvailabilities" in value;

    return isInstance;
}

export function AppAvailabilityV2CreateRequestDataRelationshipsFromJSON(json: any): AppAvailabilityV2CreateRequestDataRelationships {
    return AppAvailabilityV2CreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppAvailabilityV2CreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2CreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'territoryAvailabilities': AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSON(json['territoryAvailabilities']),
    };
}

export function AppAvailabilityV2CreateRequestDataRelationshipsToJSON(value?: AppAvailabilityV2CreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value.app),
        'territoryAvailabilities': AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesToJSON(value.territoryAvailabilities),
    };
}

