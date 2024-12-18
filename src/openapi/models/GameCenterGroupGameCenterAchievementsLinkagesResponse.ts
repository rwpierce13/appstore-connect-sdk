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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterGroupGameCenterAchievementsLinkagesResponse
 */
export interface GameCenterGroupGameCenterAchievementsLinkagesResponse {
    /**
     * 
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterGroupGameCenterAchievementsLinkagesResponse
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterGroupGameCenterAchievementsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterGroupGameCenterAchievementsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterGroupGameCenterAchievementsLinkagesResponse interface.
 */
export function instanceOfGameCenterGroupGameCenterAchievementsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterGroupGameCenterAchievementsLinkagesResponseFromJSON(json: any): GameCenterGroupGameCenterAchievementsLinkagesResponse {
    return GameCenterGroupGameCenterAchievementsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterGroupGameCenterAchievementsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterAchievementsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterGroupGameCenterAchievementsLinkagesResponseToJSON(value?: GameCenterGroupGameCenterAchievementsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
