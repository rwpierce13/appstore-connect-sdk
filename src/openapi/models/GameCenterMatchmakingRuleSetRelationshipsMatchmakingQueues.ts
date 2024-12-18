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
import type { GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInner } from './GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInner';
import {
    GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInnerFromJSON,
    GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInnerFromJSONTyped,
    GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInnerToJSON,
} from './GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues
 */
export interface GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInner>}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues
     */
    data?: Array<GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInner>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesFromJSON(json: any): GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues {
    return GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInnerFromJSON)),
    };
}

export function GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesToJSON(value?: GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterMatchmakingRuleSetRelationshipsMatchmakingQueuesDataInnerToJSON)),
    };
}

