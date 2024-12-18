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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { GameCenterPlayerAchievementSubmission } from './GameCenterPlayerAchievementSubmission';
import {
    GameCenterPlayerAchievementSubmissionFromJSON,
    GameCenterPlayerAchievementSubmissionFromJSONTyped,
    GameCenterPlayerAchievementSubmissionToJSON,
} from './GameCenterPlayerAchievementSubmission';

/**
 * 
 * @export
 * @interface GameCenterPlayerAchievementSubmissionResponse
 */
export interface GameCenterPlayerAchievementSubmissionResponse {
    /**
     * 
     * @type {GameCenterPlayerAchievementSubmission}
     * @memberof GameCenterPlayerAchievementSubmissionResponse
     */
    data: GameCenterPlayerAchievementSubmission;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterPlayerAchievementSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterPlayerAchievementSubmissionResponse interface.
 */
export function instanceOfGameCenterPlayerAchievementSubmissionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterPlayerAchievementSubmissionResponseFromJSON(json: any): GameCenterPlayerAchievementSubmissionResponse {
    return GameCenterPlayerAchievementSubmissionResponseFromJSONTyped(json, false);
}

export function GameCenterPlayerAchievementSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterPlayerAchievementSubmissionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterPlayerAchievementSubmissionFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterPlayerAchievementSubmissionResponseToJSON(value?: GameCenterPlayerAchievementSubmissionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterPlayerAchievementSubmissionToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

