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


import * as runtime from '../runtime';
import type {
  AppClipDomainStatusResponse,
  BetaAppClipInvocationsResponse,
  BuildBundleFileSizesResponse,
  ErrorResponse,
} from '../models';
import {
    AppClipDomainStatusResponseFromJSON,
    AppClipDomainStatusResponseToJSON,
    BetaAppClipInvocationsResponseFromJSON,
    BetaAppClipInvocationsResponseToJSON,
    BuildBundleFileSizesResponseFromJSON,
    BuildBundleFileSizesResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BuildBundlesAppClipDomainCacheStatusGetToOneRelatedRequest {
    id: string;
    fieldsAppClipDomainStatuses?: Array<BuildBundlesAppClipDomainCacheStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum>;
}

export interface BuildBundlesAppClipDomainDebugStatusGetToOneRelatedRequest {
    id: string;
    fieldsAppClipDomainStatuses?: Array<BuildBundlesAppClipDomainDebugStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum>;
}

export interface BuildBundlesBetaAppClipInvocationsGetToManyRelatedRequest {
    id: string;
    fieldsBetaAppClipInvocations?: Array<BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationsEnum>;
    fieldsBetaAppClipInvocationLocalizations?: Array<BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationLocalizationsEnum>;
    limit?: number;
    include?: Array<BuildBundlesBetaAppClipInvocationsGetToManyRelatedIncludeEnum>;
    limitBetaAppClipInvocationLocalizations?: number;
}

export interface BuildBundlesBuildBundleFileSizesGetToManyRelatedRequest {
    id: string;
    fieldsBuildBundleFileSizes?: Array<BuildBundlesBuildBundleFileSizesGetToManyRelatedFieldsBuildBundleFileSizesEnum>;
    limit?: number;
}

/**
 * 
 */
export class BuildBundlesApi extends runtime.BaseAPI {

    /**
     */
    async buildBundlesAppClipDomainCacheStatusGetToOneRelatedRaw(requestParameters: BuildBundlesAppClipDomainCacheStatusGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDomainStatusResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBundlesAppClipDomainCacheStatusGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipDomainStatuses) {
            queryParameters['fields[appClipDomainStatuses]'] = requestParameters.fieldsAppClipDomainStatuses.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/buildBundles/{id}/appClipDomainCacheStatus`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDomainStatusResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBundlesAppClipDomainCacheStatusGetToOneRelated(requestParameters: BuildBundlesAppClipDomainCacheStatusGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDomainStatusResponse> {
        const response = await this.buildBundlesAppClipDomainCacheStatusGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBundlesAppClipDomainDebugStatusGetToOneRelatedRaw(requestParameters: BuildBundlesAppClipDomainDebugStatusGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDomainStatusResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBundlesAppClipDomainDebugStatusGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipDomainStatuses) {
            queryParameters['fields[appClipDomainStatuses]'] = requestParameters.fieldsAppClipDomainStatuses.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/buildBundles/{id}/appClipDomainDebugStatus`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDomainStatusResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBundlesAppClipDomainDebugStatusGetToOneRelated(requestParameters: BuildBundlesAppClipDomainDebugStatusGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDomainStatusResponse> {
        const response = await this.buildBundlesAppClipDomainDebugStatusGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBundlesBetaAppClipInvocationsGetToManyRelatedRaw(requestParameters: BuildBundlesBetaAppClipInvocationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppClipInvocationsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBundlesBetaAppClipInvocationsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBetaAppClipInvocations) {
            queryParameters['fields[betaAppClipInvocations]'] = requestParameters.fieldsBetaAppClipInvocations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaAppClipInvocationLocalizations) {
            queryParameters['fields[betaAppClipInvocationLocalizations]'] = requestParameters.fieldsBetaAppClipInvocationLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitBetaAppClipInvocationLocalizations !== undefined) {
            queryParameters['limit[betaAppClipInvocationLocalizations]'] = requestParameters.limitBetaAppClipInvocationLocalizations;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/buildBundles/{id}/betaAppClipInvocations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppClipInvocationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBundlesBetaAppClipInvocationsGetToManyRelated(requestParameters: BuildBundlesBetaAppClipInvocationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppClipInvocationsResponse> {
        const response = await this.buildBundlesBetaAppClipInvocationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBundlesBuildBundleFileSizesGetToManyRelatedRaw(requestParameters: BuildBundlesBuildBundleFileSizesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBundleFileSizesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBundlesBuildBundleFileSizesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBuildBundleFileSizes) {
            queryParameters['fields[buildBundleFileSizes]'] = requestParameters.fieldsBuildBundleFileSizes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/buildBundles/{id}/buildBundleFileSizes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBundleFileSizesResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBundlesBuildBundleFileSizesGetToManyRelated(requestParameters: BuildBundlesBuildBundleFileSizesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBundleFileSizesResponse> {
        const response = await this.buildBundlesBuildBundleFileSizesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BuildBundlesAppClipDomainCacheStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum = {
    Domains: 'domains',
    LastUpdatedDate: 'lastUpdatedDate'
} as const;
export type BuildBundlesAppClipDomainCacheStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum = typeof BuildBundlesAppClipDomainCacheStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum[keyof typeof BuildBundlesAppClipDomainCacheStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum];
/**
 * @export
 */
export const BuildBundlesAppClipDomainDebugStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum = {
    Domains: 'domains',
    LastUpdatedDate: 'lastUpdatedDate'
} as const;
export type BuildBundlesAppClipDomainDebugStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum = typeof BuildBundlesAppClipDomainDebugStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum[keyof typeof BuildBundlesAppClipDomainDebugStatusGetToOneRelatedFieldsAppClipDomainStatusesEnum];
/**
 * @export
 */
export const BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationsEnum = {
    Url: 'url',
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationsEnum = typeof BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationsEnum[keyof typeof BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationsEnum];
/**
 * @export
 */
export const BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationLocalizationsEnum = {
    Title: 'title',
    Locale: 'locale'
} as const;
export type BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationLocalizationsEnum = typeof BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationLocalizationsEnum[keyof typeof BuildBundlesBetaAppClipInvocationsGetToManyRelatedFieldsBetaAppClipInvocationLocalizationsEnum];
/**
 * @export
 */
export const BuildBundlesBetaAppClipInvocationsGetToManyRelatedIncludeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BuildBundlesBetaAppClipInvocationsGetToManyRelatedIncludeEnum = typeof BuildBundlesBetaAppClipInvocationsGetToManyRelatedIncludeEnum[keyof typeof BuildBundlesBetaAppClipInvocationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const BuildBundlesBuildBundleFileSizesGetToManyRelatedFieldsBuildBundleFileSizesEnum = {
    DeviceModel: 'deviceModel',
    OsVersion: 'osVersion',
    DownloadBytes: 'downloadBytes',
    InstallBytes: 'installBytes'
} as const;
export type BuildBundlesBuildBundleFileSizesGetToManyRelatedFieldsBuildBundleFileSizesEnum = typeof BuildBundlesBuildBundleFileSizesGetToManyRelatedFieldsBuildBundleFileSizesEnum[keyof typeof BuildBundlesBuildBundleFileSizesGetToManyRelatedFieldsBuildBundleFileSizesEnum];
