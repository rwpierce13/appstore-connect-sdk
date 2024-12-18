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
import type { Decimal } from './Decimal';
import {
    DecimalFromJSON,
    DecimalFromJSONTyped,
    DecimalToJSON,
} from './Decimal';
import type { GameCenterLeaderboardFormatter } from './GameCenterLeaderboardFormatter';
import {
    GameCenterLeaderboardFormatterFromJSON,
    GameCenterLeaderboardFormatterFromJSONTyped,
    GameCenterLeaderboardFormatterToJSON,
} from './GameCenterLeaderboardFormatter';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardAttributes
 */
export interface GameCenterLeaderboardAttributes {
    /**
     * 
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardAttributes
     */
    defaultFormatter?: GameCenterLeaderboardFormatter;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    vendorIdentifier?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    submissionType?: GameCenterLeaderboardAttributesSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    scoreSortType?: GameCenterLeaderboardAttributesScoreSortTypeEnum;
    /**
     * 
     * @type {Decimal}
     * @memberof GameCenterLeaderboardAttributes
     */
    scoreRangeStart?: Decimal;
    /**
     * 
     * @type {Decimal}
     * @memberof GameCenterLeaderboardAttributes
     */
    scoreRangeEnd?: Decimal;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardAttributes
     */
    recurrenceStartDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    recurrenceDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    recurrenceRule?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterLeaderboardAttributes
     */
    archived?: boolean;
}


/**
 * @export
 */
export const GameCenterLeaderboardAttributesSubmissionTypeEnum = {
    BestScore: 'BEST_SCORE',
    MostRecentScore: 'MOST_RECENT_SCORE'
} as const;
export type GameCenterLeaderboardAttributesSubmissionTypeEnum = typeof GameCenterLeaderboardAttributesSubmissionTypeEnum[keyof typeof GameCenterLeaderboardAttributesSubmissionTypeEnum];

/**
 * @export
 */
export const GameCenterLeaderboardAttributesScoreSortTypeEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GameCenterLeaderboardAttributesScoreSortTypeEnum = typeof GameCenterLeaderboardAttributesScoreSortTypeEnum[keyof typeof GameCenterLeaderboardAttributesScoreSortTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardAttributes interface.
 */
export function instanceOfGameCenterLeaderboardAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardAttributesFromJSON(json: any): GameCenterLeaderboardAttributes {
    return GameCenterLeaderboardAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultFormatter': !exists(json, 'defaultFormatter') ? undefined : GameCenterLeaderboardFormatterFromJSON(json['defaultFormatter']),
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'vendorIdentifier': !exists(json, 'vendorIdentifier') ? undefined : json['vendorIdentifier'],
        'submissionType': !exists(json, 'submissionType') ? undefined : json['submissionType'],
        'scoreSortType': !exists(json, 'scoreSortType') ? undefined : json['scoreSortType'],
        'scoreRangeStart': !exists(json, 'scoreRangeStart') ? undefined : DecimalFromJSON(json['scoreRangeStart']),
        'scoreRangeEnd': !exists(json, 'scoreRangeEnd') ? undefined : DecimalFromJSON(json['scoreRangeEnd']),
        'recurrenceStartDate': !exists(json, 'recurrenceStartDate') ? undefined : (new Date(json['recurrenceStartDate'])),
        'recurrenceDuration': !exists(json, 'recurrenceDuration') ? undefined : json['recurrenceDuration'],
        'recurrenceRule': !exists(json, 'recurrenceRule') ? undefined : json['recurrenceRule'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
    };
}

export function GameCenterLeaderboardAttributesToJSON(value?: GameCenterLeaderboardAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterToJSON(value.defaultFormatter),
        'referenceName': value.referenceName,
        'vendorIdentifier': value.vendorIdentifier,
        'submissionType': value.submissionType,
        'scoreSortType': value.scoreSortType,
        'scoreRangeStart': DecimalToJSON(value.scoreRangeStart),
        'scoreRangeEnd': DecimalToJSON(value.scoreRangeEnd),
        'recurrenceStartDate': value.recurrenceStartDate === undefined ? undefined : (value.recurrenceStartDate.toISOString()),
        'recurrenceDuration': value.recurrenceDuration,
        'recurrenceRule': value.recurrenceRule,
        'archived': value.archived,
    };
}
