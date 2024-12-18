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
import type { AppStoreVersionExperimentV2 } from './AppStoreVersionExperimentV2';
import {
    AppStoreVersionExperimentV2FromJSON,
    AppStoreVersionExperimentV2FromJSONTyped,
    AppStoreVersionExperimentV2ToJSON,
} from './AppStoreVersionExperimentV2';
import type { AppStoreVersionExperimentsV2ResponseIncludedInner } from './AppStoreVersionExperimentsV2ResponseIncludedInner';
import {
    AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON,
    AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSONTyped,
    AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON,
} from './AppStoreVersionExperimentsV2ResponseIncludedInner';
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
 * @interface AppStoreVersionExperimentsV2Response
 */
export interface AppStoreVersionExperimentsV2Response {
    /**
     * 
     * @type {Array<AppStoreVersionExperimentV2>}
     * @memberof AppStoreVersionExperimentsV2Response
     */
    data: Array<AppStoreVersionExperimentV2>;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentsV2ResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentsV2Response
     */
    included?: Array<AppStoreVersionExperimentsV2ResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppStoreVersionExperimentsV2Response
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentsV2Response
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentsV2Response interface.
 */
export function instanceOfAppStoreVersionExperimentsV2Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionExperimentsV2ResponseFromJSON(json: any): AppStoreVersionExperimentsV2Response {
    return AppStoreVersionExperimentsV2ResponseFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentsV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentsV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreVersionExperimentV2FromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppStoreVersionExperimentsV2ResponseToJSON(value?: AppStoreVersionExperimentsV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppStoreVersionExperimentV2ToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
