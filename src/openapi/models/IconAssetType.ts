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
export const IconAssetType = {
    AppStore: 'APP_STORE',
    MessagesAppStore: 'MESSAGES_APP_STORE',
    WatchAppStore: 'WATCH_APP_STORE',
    TvOsHomeScreen: 'TV_OS_HOME_SCREEN',
    TvOsTopShelf: 'TV_OS_TOP_SHELF',
    AlternateExperiment: 'ALTERNATE_EXPERIMENT'
} as const;
export type IconAssetType = typeof IconAssetType[keyof typeof IconAssetType];


export function IconAssetTypeFromJSON(json: any): IconAssetType {
    return IconAssetTypeFromJSONTyped(json, false);
}

export function IconAssetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IconAssetType {
    return json as IconAssetType;
}

export function IconAssetTypeToJSON(value?: IconAssetType | null): any {
    return value as any;
}

