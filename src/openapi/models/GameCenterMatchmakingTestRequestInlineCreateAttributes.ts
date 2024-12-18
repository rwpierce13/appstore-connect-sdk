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
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestRequestInlineCreateAttributes
 */
export interface GameCenterMatchmakingTestRequestInlineCreateAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    requestName: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    secondsInQueue: number;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    locale?: GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum;
    /**
     * 
     * @type {Location}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    location?: Location;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    minPlayers?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    maxPlayers?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    playerCount?: number;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    bundleId: string;
    /**
     * 
     * @type {Platform}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    platform: Platform;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    appVersion: string;
}


/**
 * @export
 */
export const GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum = {
    ArSa: 'AR-SA',
    CaEs: 'CA-ES',
    CsCz: 'CS-CZ',
    DaDk: 'DA-DK',
    DeDe: 'DE-DE',
    ElGr: 'EL-GR',
    EnAu: 'EN-AU',
    EnGb: 'EN-GB',
    EnUs: 'EN-US',
    EnKy: 'EN-KY',
    EsEs: 'ES-ES',
    EsMx: 'ES-MX',
    FiFi: 'FI-FI',
    FrCa: 'FR-CA',
    FrFr: 'FR-FR',
    HiIn: 'HI-IN',
    HrHr: 'HR-HR',
    HuHu: 'HU-HU',
    IdId: 'ID-ID',
    ItIt: 'IT-IT',
    IwIl: 'IW-IL',
    JaJp: 'JA-JP',
    KoKr: 'KO-KR',
    MsMy: 'MS-MY',
    NlNl: 'NL-NL',
    NoNo: 'NO-NO',
    PlPl: 'PL-PL',
    PtBr: 'PT-BR',
    PtPt: 'PT-PT',
    RoRo: 'RO-RO',
    RuRu: 'RU-RU',
    SkSk: 'SK-SK',
    SvSe: 'SV-SE',
    ThTh: 'TH-TH',
    TrTr: 'TR-TR',
    UkUa: 'UK-UA',
    ZhCn: 'ZH-CN',
    ZhTw: 'ZH-TW',
    ZhHk: 'ZH-HK'
} as const;
export type GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum = typeof GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum[keyof typeof GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateAttributes interface.
 */
export function instanceOfGameCenterMatchmakingTestRequestInlineCreateAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "requestName" in value;
    isInstance = isInstance && "secondsInQueue" in value;
    isInstance = isInstance && "bundleId" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "appVersion" in value;

    return isInstance;
}

export function GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateAttributes {
    return GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requestName': json['requestName'],
        'secondsInQueue': json['secondsInQueue'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'location': !exists(json, 'location') ? undefined : LocationFromJSON(json['location']),
        'minPlayers': !exists(json, 'minPlayers') ? undefined : json['minPlayers'],
        'maxPlayers': !exists(json, 'maxPlayers') ? undefined : json['maxPlayers'],
        'playerCount': !exists(json, 'playerCount') ? undefined : json['playerCount'],
        'bundleId': json['bundleId'],
        'platform': PlatformFromJSON(json['platform']),
        'appVersion': json['appVersion'],
    };
}

export function GameCenterMatchmakingTestRequestInlineCreateAttributesToJSON(value?: GameCenterMatchmakingTestRequestInlineCreateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requestName': value.requestName,
        'secondsInQueue': value.secondsInQueue,
        'locale': value.locale,
        'location': LocationToJSON(value.location),
        'minPlayers': value.minPlayers,
        'maxPlayers': value.maxPlayers,
        'playerCount': value.playerCount,
        'bundleId': value.bundleId,
        'platform': PlatformToJSON(value.platform),
        'appVersion': value.appVersion,
    };
}

