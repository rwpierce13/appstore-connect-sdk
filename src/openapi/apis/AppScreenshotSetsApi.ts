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
  AppScreenshotSetAppScreenshotsLinkagesRequest,
  AppScreenshotSetAppScreenshotsLinkagesResponse,
  AppScreenshotSetCreateRequest,
  AppScreenshotSetResponse,
  AppScreenshotsResponse,
  ErrorResponse,
} from '../models';
import {
    AppScreenshotSetAppScreenshotsLinkagesRequestFromJSON,
    AppScreenshotSetAppScreenshotsLinkagesRequestToJSON,
    AppScreenshotSetAppScreenshotsLinkagesResponseFromJSON,
    AppScreenshotSetAppScreenshotsLinkagesResponseToJSON,
    AppScreenshotSetCreateRequestFromJSON,
    AppScreenshotSetCreateRequestToJSON,
    AppScreenshotSetResponseFromJSON,
    AppScreenshotSetResponseToJSON,
    AppScreenshotsResponseFromJSON,
    AppScreenshotsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppScreenshotSetsAppScreenshotsGetToManyRelatedRequest {
    id: string;
    fieldsAppScreenshots?: Array<AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotsEnum>;
    fieldsAppScreenshotSets?: Array<AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    limit?: number;
    include?: Array<AppScreenshotSetsAppScreenshotsGetToManyRelatedIncludeEnum>;
}

export interface AppScreenshotSetsAppScreenshotsGetToManyRelationshipRequest {
    id: string;
    limit?: number;
}

export interface AppScreenshotSetsAppScreenshotsReplaceToManyRelationshipRequest {
    id: string;
    appScreenshotSetAppScreenshotsLinkagesRequest: AppScreenshotSetAppScreenshotsLinkagesRequest;
}

export interface AppScreenshotSetsCreateInstanceRequest {
    appScreenshotSetCreateRequest: AppScreenshotSetCreateRequest;
}

export interface AppScreenshotSetsDeleteInstanceRequest {
    id: string;
}

export interface AppScreenshotSetsGetInstanceRequest {
    id: string;
    fieldsAppScreenshotSets?: Array<AppScreenshotSetsGetInstanceFieldsAppScreenshotSetsEnum>;
    fieldsAppScreenshots?: Array<AppScreenshotSetsGetInstanceFieldsAppScreenshotsEnum>;
    include?: Array<AppScreenshotSetsGetInstanceIncludeEnum>;
    limitAppScreenshots?: number;
}

/**
 * 
 */
export class AppScreenshotSetsApi extends runtime.BaseAPI {

    /**
     */
    async appScreenshotSetsAppScreenshotsGetToManyRelatedRaw(requestParameters: AppScreenshotSetsAppScreenshotsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appScreenshotSetsAppScreenshotsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppScreenshots) {
            queryParameters['fields[appScreenshots]'] = requestParameters.fieldsAppScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppScreenshotSets) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appScreenshotSets/{id}/appScreenshots`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotSetsAppScreenshotsGetToManyRelated(requestParameters: AppScreenshotSetsAppScreenshotsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotsResponse> {
        const response = await this.appScreenshotSetsAppScreenshotsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appScreenshotSetsAppScreenshotsGetToManyRelationshipRaw(requestParameters: AppScreenshotSetsAppScreenshotsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetAppScreenshotsLinkagesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appScreenshotSetsAppScreenshotsGetToManyRelationship.');
        }

        const queryParameters: any = {};

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
            path: `/v1/appScreenshotSets/{id}/relationships/appScreenshots`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotSetAppScreenshotsLinkagesResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotSetsAppScreenshotsGetToManyRelationship(requestParameters: AppScreenshotSetsAppScreenshotsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetAppScreenshotsLinkagesResponse> {
        const response = await this.appScreenshotSetsAppScreenshotsGetToManyRelationshipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appScreenshotSetsAppScreenshotsReplaceToManyRelationshipRaw(requestParameters: AppScreenshotSetsAppScreenshotsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appScreenshotSetsAppScreenshotsReplaceToManyRelationship.');
        }

        if (requestParameters.appScreenshotSetAppScreenshotsLinkagesRequest === null || requestParameters.appScreenshotSetAppScreenshotsLinkagesRequest === undefined) {
            throw new runtime.RequiredError('appScreenshotSetAppScreenshotsLinkagesRequest','Required parameter requestParameters.appScreenshotSetAppScreenshotsLinkagesRequest was null or undefined when calling appScreenshotSetsAppScreenshotsReplaceToManyRelationship.');
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
            path: `/v1/appScreenshotSets/{id}/relationships/appScreenshots`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppScreenshotSetAppScreenshotsLinkagesRequestToJSON(requestParameters.appScreenshotSetAppScreenshotsLinkagesRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appScreenshotSetsAppScreenshotsReplaceToManyRelationship(requestParameters: AppScreenshotSetsAppScreenshotsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appScreenshotSetsAppScreenshotsReplaceToManyRelationshipRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appScreenshotSetsCreateInstanceRaw(requestParameters: AppScreenshotSetsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetResponse>> {
        if (requestParameters.appScreenshotSetCreateRequest === null || requestParameters.appScreenshotSetCreateRequest === undefined) {
            throw new runtime.RequiredError('appScreenshotSetCreateRequest','Required parameter requestParameters.appScreenshotSetCreateRequest was null or undefined when calling appScreenshotSetsCreateInstance.');
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
            path: `/v1/appScreenshotSets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppScreenshotSetCreateRequestToJSON(requestParameters.appScreenshotSetCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotSetResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotSetsCreateInstance(requestParameters: AppScreenshotSetsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetResponse> {
        const response = await this.appScreenshotSetsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appScreenshotSetsDeleteInstanceRaw(requestParameters: AppScreenshotSetsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appScreenshotSetsDeleteInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/appScreenshotSets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appScreenshotSetsDeleteInstance(requestParameters: AppScreenshotSetsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appScreenshotSetsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appScreenshotSetsGetInstanceRaw(requestParameters: AppScreenshotSetsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appScreenshotSetsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppScreenshotSets) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppScreenshots) {
            queryParameters['fields[appScreenshots]'] = requestParameters.fieldsAppScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAppScreenshots !== undefined) {
            queryParameters['limit[appScreenshots]'] = requestParameters.limitAppScreenshots;
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
            path: `/v1/appScreenshotSets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotSetResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotSetsGetInstance(requestParameters: AppScreenshotSetsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetResponse> {
        const response = await this.appScreenshotSetsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    AssetType: 'assetType',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppScreenshotSet: 'appScreenshotSet'
} as const;
export type AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotsEnum = typeof AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotsEnum[keyof typeof AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotsEnum];
/**
 * @export
 */
export const AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotSetsEnum = typeof AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotSetsEnum[keyof typeof AppScreenshotSetsAppScreenshotsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppScreenshotSetsAppScreenshotsGetToManyRelatedIncludeEnum = {
    AppScreenshotSet: 'appScreenshotSet'
} as const;
export type AppScreenshotSetsAppScreenshotsGetToManyRelatedIncludeEnum = typeof AppScreenshotSetsAppScreenshotsGetToManyRelatedIncludeEnum[keyof typeof AppScreenshotSetsAppScreenshotsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppScreenshotSetsGetInstanceFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotSetsGetInstanceFieldsAppScreenshotSetsEnum = typeof AppScreenshotSetsGetInstanceFieldsAppScreenshotSetsEnum[keyof typeof AppScreenshotSetsGetInstanceFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppScreenshotSetsGetInstanceFieldsAppScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    AssetType: 'assetType',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppScreenshotSet: 'appScreenshotSet'
} as const;
export type AppScreenshotSetsGetInstanceFieldsAppScreenshotsEnum = typeof AppScreenshotSetsGetInstanceFieldsAppScreenshotsEnum[keyof typeof AppScreenshotSetsGetInstanceFieldsAppScreenshotsEnum];
/**
 * @export
 */
export const AppScreenshotSetsGetInstanceIncludeEnum = {
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotSetsGetInstanceIncludeEnum = typeof AppScreenshotSetsGetInstanceIncludeEnum[keyof typeof AppScreenshotSetsGetInstanceIncludeEnum];
