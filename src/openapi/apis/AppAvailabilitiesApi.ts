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
  AppAvailabilityV2CreateRequest,
  AppAvailabilityV2Response,
  ErrorResponse,
  TerritoryAvailabilitiesResponse,
} from '../models';
import {
    AppAvailabilityV2CreateRequestFromJSON,
    AppAvailabilityV2CreateRequestToJSON,
    AppAvailabilityV2ResponseFromJSON,
    AppAvailabilityV2ResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    TerritoryAvailabilitiesResponseFromJSON,
    TerritoryAvailabilitiesResponseToJSON,
} from '../models';

export interface AppAvailabilitiesV2CreateInstanceRequest {
    appAvailabilityV2CreateRequest: AppAvailabilityV2CreateRequest;
}

export interface AppAvailabilitiesV2GetInstanceRequest {
    id: string;
    fieldsAppAvailabilities?: Array<AppAvailabilitiesV2GetInstanceFieldsAppAvailabilitiesEnum>;
    fieldsTerritoryAvailabilities?: Array<AppAvailabilitiesV2GetInstanceFieldsTerritoryAvailabilitiesEnum>;
    include?: Array<AppAvailabilitiesV2GetInstanceIncludeEnum>;
    limitTerritoryAvailabilities?: number;
}

export interface AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedRequest {
    id: string;
    fieldsTerritoryAvailabilities?: Array<AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoryAvailabilitiesEnum>;
    fieldsTerritories?: Array<AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class AppAvailabilitiesApi extends runtime.BaseAPI {

    /**
     */
    async appAvailabilitiesV2CreateInstanceRaw(requestParameters: AppAvailabilitiesV2CreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppAvailabilityV2Response>> {
        if (requestParameters.appAvailabilityV2CreateRequest === null || requestParameters.appAvailabilityV2CreateRequest === undefined) {
            throw new runtime.RequiredError('appAvailabilityV2CreateRequest','Required parameter requestParameters.appAvailabilityV2CreateRequest was null or undefined when calling appAvailabilitiesV2CreateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/appAvailabilities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppAvailabilityV2CreateRequestToJSON(requestParameters.appAvailabilityV2CreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppAvailabilityV2ResponseFromJSON(jsonValue));
    }

    /**
     */
    async appAvailabilitiesV2CreateInstance(requestParameters: AppAvailabilitiesV2CreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppAvailabilityV2Response> {
        const response = await this.appAvailabilitiesV2CreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appAvailabilitiesV2GetInstanceRaw(requestParameters: AppAvailabilitiesV2GetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppAvailabilityV2Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appAvailabilitiesV2GetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppAvailabilities) {
            queryParameters['fields[appAvailabilities]'] = requestParameters.fieldsAppAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritoryAvailabilities) {
            queryParameters['fields[territoryAvailabilities]'] = requestParameters.fieldsTerritoryAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitTerritoryAvailabilities !== undefined) {
            queryParameters['limit[territoryAvailabilities]'] = requestParameters.limitTerritoryAvailabilities;
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
            path: `/v2/appAvailabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppAvailabilityV2ResponseFromJSON(jsonValue));
    }

    /**
     */
    async appAvailabilitiesV2GetInstance(requestParameters: AppAvailabilitiesV2GetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppAvailabilityV2Response> {
        const response = await this.appAvailabilitiesV2GetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedRaw(requestParameters: AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerritoryAvailabilitiesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsTerritoryAvailabilities) {
            queryParameters['fields[territoryAvailabilities]'] = requestParameters.fieldsTerritoryAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v2/appAvailabilities/{id}/territoryAvailabilities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerritoryAvailabilitiesResponseFromJSON(jsonValue));
    }

    /**
     */
    async appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated(requestParameters: AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerritoryAvailabilitiesResponse> {
        const response = await this.appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppAvailabilitiesV2GetInstanceFieldsAppAvailabilitiesEnum = {
    AvailableInNewTerritories: 'availableInNewTerritories',
    TerritoryAvailabilities: 'territoryAvailabilities'
} as const;
export type AppAvailabilitiesV2GetInstanceFieldsAppAvailabilitiesEnum = typeof AppAvailabilitiesV2GetInstanceFieldsAppAvailabilitiesEnum[keyof typeof AppAvailabilitiesV2GetInstanceFieldsAppAvailabilitiesEnum];
/**
 * @export
 */
export const AppAvailabilitiesV2GetInstanceFieldsTerritoryAvailabilitiesEnum = {
    Available: 'available',
    ReleaseDate: 'releaseDate',
    PreOrderEnabled: 'preOrderEnabled',
    PreOrderPublishDate: 'preOrderPublishDate',
    ContentStatuses: 'contentStatuses',
    Territory: 'territory'
} as const;
export type AppAvailabilitiesV2GetInstanceFieldsTerritoryAvailabilitiesEnum = typeof AppAvailabilitiesV2GetInstanceFieldsTerritoryAvailabilitiesEnum[keyof typeof AppAvailabilitiesV2GetInstanceFieldsTerritoryAvailabilitiesEnum];
/**
 * @export
 */
export const AppAvailabilitiesV2GetInstanceIncludeEnum = {
    TerritoryAvailabilities: 'territoryAvailabilities'
} as const;
export type AppAvailabilitiesV2GetInstanceIncludeEnum = typeof AppAvailabilitiesV2GetInstanceIncludeEnum[keyof typeof AppAvailabilitiesV2GetInstanceIncludeEnum];
/**
 * @export
 */
export const AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoryAvailabilitiesEnum = {
    Available: 'available',
    ReleaseDate: 'releaseDate',
    PreOrderEnabled: 'preOrderEnabled',
    PreOrderPublishDate: 'preOrderPublishDate',
    ContentStatuses: 'contentStatuses',
    Territory: 'territory'
} as const;
export type AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoryAvailabilitiesEnum = typeof AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoryAvailabilitiesEnum[keyof typeof AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoryAvailabilitiesEnum];
/**
 * @export
 */
export const AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoriesEnum = typeof AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedIncludeEnum = {
    Territory: 'territory'
} as const;
export type AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedIncludeEnum = typeof AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedIncludeEnum[keyof typeof AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedIncludeEnum];