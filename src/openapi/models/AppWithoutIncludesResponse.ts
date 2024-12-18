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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppWithoutIncludesResponse
 */
export interface AppWithoutIncludesResponse {
    /**
     * 
     * @type {App}
     * @memberof AppWithoutIncludesResponse
     */
    data: App;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppWithoutIncludesResponse interface.
 */
export function instanceOfAppWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppWithoutIncludesResponseFromJSON(json: any): AppWithoutIncludesResponse {
    return AppWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppWithoutIncludesResponseToJSON(value?: AppWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}
