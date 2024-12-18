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
import type { AppEvent } from './AppEvent';
import {
    AppEventFromJSON,
    AppEventFromJSONTyped,
    AppEventToJSON,
} from './AppEvent';
import type { AppEventLocalization } from './AppEventLocalization';
import {
    AppEventLocalizationFromJSON,
    AppEventLocalizationFromJSONTyped,
    AppEventLocalizationToJSON,
} from './AppEventLocalization';
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
 * @interface AppEventsResponse
 */
export interface AppEventsResponse {
    /**
     * 
     * @type {Array<AppEvent>}
     * @memberof AppEventsResponse
     */
    data: Array<AppEvent>;
    /**
     * 
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventsResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppEventsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppEventsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppEventsResponse interface.
 */
export function instanceOfAppEventsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEventsResponseFromJSON(json: any): AppEventsResponse {
    return AppEventsResponseFromJSONTyped(json, false);
}

export function AppEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEventFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppEventsResponseToJSON(value?: AppEventsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppEventToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppEventLocalizationToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

