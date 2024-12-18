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
  AppClipAdvancedExperiencesResponse,
  AppClipDefaultExperiencesResponse,
  AppClipResponse,
  ErrorResponse,
} from '../models';
import {
    AppClipAdvancedExperiencesResponseFromJSON,
    AppClipAdvancedExperiencesResponseToJSON,
    AppClipDefaultExperiencesResponseFromJSON,
    AppClipDefaultExperiencesResponseToJSON,
    AppClipResponseFromJSON,
    AppClipResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest {
    id: string;
    filterStatus?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum>;
    filterPlaceStatus?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum>;
    filterAction?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum>;
    fieldsAppClipAdvancedExperiences?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum>;
    fieldsAppClips?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum>;
    fieldsAppClipAdvancedExperienceImages?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum>;
    fieldsAppClipAdvancedExperienceLocalizations?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum>;
    limit?: number;
    include?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum>;
    limitLocalizations?: number;
}

export interface AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest {
    id: string;
    existsReleaseWithAppStoreVersion?: boolean;
    fieldsAppClipDefaultExperiences?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum>;
    fieldsAppClips?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum>;
    fieldsAppStoreVersions?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum>;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum>;
    fieldsAppClipAppStoreReviewDetails?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum>;
    limit?: number;
    include?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum>;
    limitAppClipDefaultExperienceLocalizations?: number;
}

export interface AppClipsGetInstanceRequest {
    id: string;
    fieldsAppClips?: Array<AppClipsGetInstanceFieldsAppClipsEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum>;
    include?: Array<AppClipsGetInstanceIncludeEnum>;
    limitAppClipDefaultExperiences?: number;
}

/**
 * 
 */
export class AppClipsApi extends runtime.BaseAPI {

    /**
     */
    async appClipsAppClipAdvancedExperiencesGetToManyRelatedRaw(requestParameters: AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperiencesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipsAppClipAdvancedExperiencesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterStatus) {
            queryParameters['filter[status]'] = requestParameters.filterStatus.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterPlaceStatus) {
            queryParameters['filter[placeStatus]'] = requestParameters.filterPlaceStatus.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterAction) {
            queryParameters['filter[action]'] = requestParameters.filterAction.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipAdvancedExperiences) {
            queryParameters['fields[appClipAdvancedExperiences]'] = requestParameters.fieldsAppClipAdvancedExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClips) {
            queryParameters['fields[appClips]'] = requestParameters.fieldsAppClips.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipAdvancedExperienceImages) {
            queryParameters['fields[appClipAdvancedExperienceImages]'] = requestParameters.fieldsAppClipAdvancedExperienceImages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipAdvancedExperienceLocalizations) {
            queryParameters['fields[appClipAdvancedExperienceLocalizations]'] = requestParameters.fieldsAppClipAdvancedExperienceLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitLocalizations !== undefined) {
            queryParameters['limit[localizations]'] = requestParameters.limitLocalizations;
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
            path: `/v1/appClips/{id}/appClipAdvancedExperiences`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperiencesResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipsAppClipAdvancedExperiencesGetToManyRelated(requestParameters: AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperiencesResponse> {
        const response = await this.appClipsAppClipAdvancedExperiencesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipsAppClipDefaultExperiencesGetToManyRelatedRaw(requestParameters: AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperiencesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipsAppClipDefaultExperiencesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.existsReleaseWithAppStoreVersion !== undefined) {
            queryParameters['exists[releaseWithAppStoreVersion]'] = requestParameters.existsReleaseWithAppStoreVersion;
        }

        if (requestParameters.fieldsAppClipDefaultExperiences) {
            queryParameters['fields[appClipDefaultExperiences]'] = requestParameters.fieldsAppClipDefaultExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClips) {
            queryParameters['fields[appClips]'] = requestParameters.fieldsAppClips.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppStoreVersions) {
            queryParameters['fields[appStoreVersions]'] = requestParameters.fieldsAppStoreVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipDefaultExperienceLocalizations) {
            queryParameters['fields[appClipDefaultExperienceLocalizations]'] = requestParameters.fieldsAppClipDefaultExperienceLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipAppStoreReviewDetails) {
            queryParameters['fields[appClipAppStoreReviewDetails]'] = requestParameters.fieldsAppClipAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAppClipDefaultExperienceLocalizations !== undefined) {
            queryParameters['limit[appClipDefaultExperienceLocalizations]'] = requestParameters.limitAppClipDefaultExperienceLocalizations;
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
            path: `/v1/appClips/{id}/appClipDefaultExperiences`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDefaultExperiencesResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipsAppClipDefaultExperiencesGetToManyRelated(requestParameters: AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperiencesResponse> {
        const response = await this.appClipsAppClipDefaultExperiencesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipsGetInstanceRaw(requestParameters: AppClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClips) {
            queryParameters['fields[appClips]'] = requestParameters.fieldsAppClips.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipDefaultExperiences) {
            queryParameters['fields[appClipDefaultExperiences]'] = requestParameters.fieldsAppClipDefaultExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAppClipDefaultExperiences !== undefined) {
            queryParameters['limit[appClipDefaultExperiences]'] = requestParameters.limitAppClipDefaultExperiences;
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
            path: `/v1/appClips/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipsGetInstance(requestParameters: AppClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipResponse> {
        const response = await this.appClipsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum = {
    Received: 'RECEIVED',
    Deactivated: 'DEACTIVATED',
    AppTransferInProgress: 'APP_TRANSFER_IN_PROGRESS'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum = {
    Pending: 'PENDING',
    Matched: 'MATCHED',
    NoMatch: 'NO_MATCH'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum = {
    Open: 'OPEN',
    View: 'VIEW',
    Play: 'PLAY'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum = {
    Link: 'link',
    Version: 'version',
    Status: 'status',
    Action: 'action',
    IsPoweredBy: 'isPoweredBy',
    Place: 'place',
    PlaceStatus: 'placeStatus',
    BusinessCategory: 'businessCategory',
    DefaultLanguage: 'defaultLanguage',
    AppClip: 'appClip',
    HeaderImage: 'headerImage',
    Localizations: 'localizations'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum = {
    BundleId: 'bundleId',
    App: 'app',
    AppClipDefaultExperiences: 'appClipDefaultExperiences',
    AppClipAdvancedExperiences: 'appClipAdvancedExperiences'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum = {
    Language: 'language',
    Title: 'title',
    Subtitle: 'subtitle'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum];
/**
 * @export
 */
export const AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum = {
    AppClip: 'appClip',
    HeaderImage: 'headerImage',
    Localizations: 'localizations'
} as const;
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum = typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum = {
    Action: 'action',
    AppClip: 'appClip',
    ReleaseWithAppStoreVersion: 'releaseWithAppStoreVersion',
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations',
    AppClipAppStoreReviewDetail: 'appClipAppStoreReviewDetail'
} as const;
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum = typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum = {
    BundleId: 'bundleId',
    App: 'app',
    AppClipDefaultExperiences: 'appClipDefaultExperiences',
    AppClipAdvancedExperiences: 'appClipAdvancedExperiences'
} as const;
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum = typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum];
/**
 * @export
 */
export const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum = {
    Platform: 'platform',
    VersionString: 'versionString',
    AppStoreState: 'appStoreState',
    AppVersionState: 'appVersionState',
    Copyright: 'copyright',
    ReviewType: 'reviewType',
    ReleaseType: 'releaseType',
    EarliestReleaseDate: 'earliestReleaseDate',
    Downloadable: 'downloadable',
    CreatedDate: 'createdDate',
    App: 'app',
    AgeRatingDeclaration: 'ageRatingDeclaration',
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations',
    Build: 'build',
    AppStoreVersionPhasedRelease: 'appStoreVersionPhasedRelease',
    GameCenterAppVersion: 'gameCenterAppVersion',
    RoutingAppCoverage: 'routingAppCoverage',
    AppStoreReviewDetail: 'appStoreReviewDetail',
    AppStoreVersionSubmission: 'appStoreVersionSubmission',
    AppClipDefaultExperience: 'appClipDefaultExperience',
    AppStoreVersionExperiments: 'appStoreVersionExperiments',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    CustomerReviews: 'customerReviews',
    AlternativeDistributionPackage: 'alternativeDistributionPackage'
} as const;
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum = typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum];
/**
 * @export
 */
export const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = {
    Locale: 'locale',
    Subtitle: 'subtitle',
    AppClipDefaultExperience: 'appClipDefaultExperience',
    AppClipHeaderImage: 'appClipHeaderImage'
} as const;
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum];
/**
 * @export
 */
export const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum = {
    InvocationUrls: 'invocationUrls',
    AppClipDefaultExperience: 'appClipDefaultExperience'
} as const;
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum = typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum];
/**
 * @export
 */
export const AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum = {
    AppClip: 'appClip',
    ReleaseWithAppStoreVersion: 'releaseWithAppStoreVersion',
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations',
    AppClipAppStoreReviewDetail: 'appClipAppStoreReviewDetail'
} as const;
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum = typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppClipsGetInstanceFieldsAppClipsEnum = {
    BundleId: 'bundleId',
    App: 'app',
    AppClipDefaultExperiences: 'appClipDefaultExperiences',
    AppClipAdvancedExperiences: 'appClipAdvancedExperiences'
} as const;
export type AppClipsGetInstanceFieldsAppClipsEnum = typeof AppClipsGetInstanceFieldsAppClipsEnum[keyof typeof AppClipsGetInstanceFieldsAppClipsEnum];
/**
 * @export
 */
export const AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum = {
    Action: 'action',
    AppClip: 'appClip',
    ReleaseWithAppStoreVersion: 'releaseWithAppStoreVersion',
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations',
    AppClipAppStoreReviewDetail: 'appClipAppStoreReviewDetail'
} as const;
export type AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum = typeof AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum[keyof typeof AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export const AppClipsGetInstanceIncludeEnum = {
    App: 'app',
    AppClipDefaultExperiences: 'appClipDefaultExperiences'
} as const;
export type AppClipsGetInstanceIncludeEnum = typeof AppClipsGetInstanceIncludeEnum[keyof typeof AppClipsGetInstanceIncludeEnum];
