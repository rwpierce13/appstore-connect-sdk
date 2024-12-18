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
import type { AppRelationshipsBetaGroups } from './AppRelationshipsBetaGroups';
import {
    AppRelationshipsBetaGroupsFromJSON,
    AppRelationshipsBetaGroupsFromJSONTyped,
    AppRelationshipsBetaGroupsToJSON,
} from './AppRelationshipsBetaGroups';
import type { AppRelationshipsBuilds } from './AppRelationshipsBuilds';
import {
    AppRelationshipsBuildsFromJSON,
    AppRelationshipsBuildsFromJSONTyped,
    AppRelationshipsBuildsToJSON,
} from './AppRelationshipsBuilds';
import type { BetaTesterRelationshipsApps } from './BetaTesterRelationshipsApps';
import {
    BetaTesterRelationshipsAppsFromJSON,
    BetaTesterRelationshipsAppsFromJSONTyped,
    BetaTesterRelationshipsAppsToJSON,
} from './BetaTesterRelationshipsApps';

/**
 * 
 * @export
 * @interface BetaTesterRelationships
 */
export interface BetaTesterRelationships {
    /**
     * 
     * @type {BetaTesterRelationshipsApps}
     * @memberof BetaTesterRelationships
     */
    apps?: BetaTesterRelationshipsApps;
    /**
     * 
     * @type {AppRelationshipsBetaGroups}
     * @memberof BetaTesterRelationships
     */
    betaGroups?: AppRelationshipsBetaGroups;
    /**
     * 
     * @type {AppRelationshipsBuilds}
     * @memberof BetaTesterRelationships
     */
    builds?: AppRelationshipsBuilds;
}

/**
 * Check if a given object implements the BetaTesterRelationships interface.
 */
export function instanceOfBetaTesterRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaTesterRelationshipsFromJSON(json: any): BetaTesterRelationships {
    return BetaTesterRelationshipsFromJSONTyped(json, false);
}

export function BetaTesterRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apps': !exists(json, 'apps') ? undefined : BetaTesterRelationshipsAppsFromJSON(json['apps']),
        'betaGroups': !exists(json, 'betaGroups') ? undefined : AppRelationshipsBetaGroupsFromJSON(json['betaGroups']),
        'builds': !exists(json, 'builds') ? undefined : AppRelationshipsBuildsFromJSON(json['builds']),
    };
}

export function BetaTesterRelationshipsToJSON(value?: BetaTesterRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apps': BetaTesterRelationshipsAppsToJSON(value.apps),
        'betaGroups': AppRelationshipsBetaGroupsToJSON(value.betaGroups),
        'builds': AppRelationshipsBuildsToJSON(value.builds),
    };
}

