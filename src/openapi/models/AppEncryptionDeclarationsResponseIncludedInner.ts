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
    AppEncryptionDeclarationDocument,
    instanceOfAppEncryptionDeclarationDocument,
    AppEncryptionDeclarationDocumentFromJSON,
    AppEncryptionDeclarationDocumentFromJSONTyped,
    AppEncryptionDeclarationDocumentToJSON,
} from './AppEncryptionDeclarationDocument';
import {
    Build,
    instanceOfBuild,
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
} from './Build';

/**
 * @type AppEncryptionDeclarationsResponseIncludedInner
 * 
 * @export
 */
export type AppEncryptionDeclarationsResponseIncludedInner = App | AppEncryptionDeclarationDocument | Build;

export function AppEncryptionDeclarationsResponseIncludedInnerFromJSON(json: any): AppEncryptionDeclarationsResponseIncludedInner {
    return AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...AppEncryptionDeclarationDocumentFromJSONTyped(json, true), ...BuildFromJSONTyped(json, true) };
}

export function AppEncryptionDeclarationsResponseIncludedInnerToJSON(value?: AppEncryptionDeclarationsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfAppEncryptionDeclarationDocument(value)) {
        return AppEncryptionDeclarationDocumentToJSON(value as AppEncryptionDeclarationDocument);
    }
    if (instanceOfBuild(value)) {
        return BuildToJSON(value as Build);
    }

    return {};
}

