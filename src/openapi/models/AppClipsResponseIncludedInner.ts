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

import {
    App,
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import {
    AppClipDefaultExperience,
    instanceOfAppClipDefaultExperience,
    AppClipDefaultExperienceFromJSON,
    AppClipDefaultExperienceFromJSONTyped,
    AppClipDefaultExperienceToJSON,
} from './AppClipDefaultExperience';

/**
 * @type AppClipsResponseIncludedInner
 * 
 * @export
 */
export type AppClipsResponseIncludedInner = App | AppClipDefaultExperience;

export function AppClipsResponseIncludedInnerFromJSON(json: any): AppClipsResponseIncludedInner {
    return AppClipsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppClipsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...AppClipDefaultExperienceFromJSONTyped(json, true) };
}

export function AppClipsResponseIncludedInnerToJSON(value?: AppClipsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfAppClipDefaultExperience(value)) {
        return AppClipDefaultExperienceToJSON(value as AppClipDefaultExperience);
    }

    return {};
}

