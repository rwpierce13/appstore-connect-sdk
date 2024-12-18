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


/**
 * 
 * @export
 */
export const ScreenshotDisplayType = {
    AppIphone67: 'APP_IPHONE_67',
    AppIphone61: 'APP_IPHONE_61',
    AppIphone65: 'APP_IPHONE_65',
    AppIphone58: 'APP_IPHONE_58',
    AppIphone55: 'APP_IPHONE_55',
    AppIphone47: 'APP_IPHONE_47',
    AppIphone40: 'APP_IPHONE_40',
    AppIphone35: 'APP_IPHONE_35',
    AppIpadPro3Gen129: 'APP_IPAD_PRO_3GEN_129',
    AppIpadPro3Gen11: 'APP_IPAD_PRO_3GEN_11',
    AppIpadPro129: 'APP_IPAD_PRO_129',
    AppIpad105: 'APP_IPAD_105',
    AppIpad97: 'APP_IPAD_97',
    AppDesktop: 'APP_DESKTOP',
    AppWatchUltra: 'APP_WATCH_ULTRA',
    AppWatchSeries10: 'APP_WATCH_SERIES_10',
    AppWatchSeries7: 'APP_WATCH_SERIES_7',
    AppWatchSeries4: 'APP_WATCH_SERIES_4',
    AppWatchSeries3: 'APP_WATCH_SERIES_3',
    AppAppleTv: 'APP_APPLE_TV',
    AppAppleVisionPro: 'APP_APPLE_VISION_PRO',
    ImessageAppIphone67: 'IMESSAGE_APP_IPHONE_67',
    ImessageAppIphone61: 'IMESSAGE_APP_IPHONE_61',
    ImessageAppIphone65: 'IMESSAGE_APP_IPHONE_65',
    ImessageAppIphone58: 'IMESSAGE_APP_IPHONE_58',
    ImessageAppIphone55: 'IMESSAGE_APP_IPHONE_55',
    ImessageAppIphone47: 'IMESSAGE_APP_IPHONE_47',
    ImessageAppIphone40: 'IMESSAGE_APP_IPHONE_40',
    ImessageAppIpadPro3Gen129: 'IMESSAGE_APP_IPAD_PRO_3GEN_129',
    ImessageAppIpadPro3Gen11: 'IMESSAGE_APP_IPAD_PRO_3GEN_11',
    ImessageAppIpadPro129: 'IMESSAGE_APP_IPAD_PRO_129',
    ImessageAppIpad105: 'IMESSAGE_APP_IPAD_105',
    ImessageAppIpad97: 'IMESSAGE_APP_IPAD_97'
} as const;
export type ScreenshotDisplayType = typeof ScreenshotDisplayType[keyof typeof ScreenshotDisplayType];


export function ScreenshotDisplayTypeFromJSON(json: any): ScreenshotDisplayType {
    return ScreenshotDisplayTypeFromJSONTyped(json, false);
}

export function ScreenshotDisplayTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenshotDisplayType {
    return json as ScreenshotDisplayType;
}

export function ScreenshotDisplayTypeToJSON(value?: ScreenshotDisplayType | null): any {
    return value as any;
}

