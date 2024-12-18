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
  AppWithoutIncludesResponse,
  BetaAppReviewDetailResponse,
  BetaAppReviewDetailUpdateRequest,
  BetaAppReviewDetailsResponse,
  ErrorResponse,
} from '../models';
import {
    AppWithoutIncludesResponseFromJSON,
    AppWithoutIncludesResponseToJSON,
    BetaAppReviewDetailResponseFromJSON,
    BetaAppReviewDetailResponseToJSON,
    BetaAppReviewDetailUpdateRequestFromJSON,
    BetaAppReviewDetailUpdateRequestToJSON,
    BetaAppReviewDetailsResponseFromJSON,
    BetaAppReviewDetailsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BetaAppReviewDetailsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum>;
}

export interface BetaAppReviewDetailsGetCollectionRequest {
    filterApp: Array<string>;
    fieldsBetaAppReviewDetails?: Array<BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum>;
    fieldsApps?: Array<BetaAppReviewDetailsGetCollectionFieldsAppsEnum>;
    limit?: number;
    include?: Array<BetaAppReviewDetailsGetCollectionIncludeEnum>;
}

export interface BetaAppReviewDetailsGetInstanceRequest {
    id: string;
    fieldsBetaAppReviewDetails?: Array<BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum>;
    fieldsApps?: Array<BetaAppReviewDetailsGetInstanceFieldsAppsEnum>;
    include?: Array<BetaAppReviewDetailsGetInstanceIncludeEnum>;
}

export interface BetaAppReviewDetailsUpdateInstanceRequest {
    id: string;
    betaAppReviewDetailUpdateRequest: BetaAppReviewDetailUpdateRequest;
}

/**
 * 
 */
export class BetaAppReviewDetailsApi extends runtime.BaseAPI {

    /**
     */
    async betaAppReviewDetailsAppGetToOneRelatedRaw(requestParameters: BetaAppReviewDetailsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsAppGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppReviewDetails/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsAppGetToOneRelated(requestParameters: BetaAppReviewDetailsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppWithoutIncludesResponse> {
        const response = await this.betaAppReviewDetailsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppReviewDetailsGetCollectionRaw(requestParameters: BetaAppReviewDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailsResponse>> {
        if (requestParameters.filterApp === null || requestParameters.filterApp === undefined) {
            throw new runtime.RequiredError('filterApp','Required parameter requestParameters.filterApp was null or undefined when calling betaAppReviewDetailsGetCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaAppReviewDetails) {
            queryParameters['fields[betaAppReviewDetails]'] = requestParameters.fieldsBetaAppReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppReviewDetails`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailsResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsGetCollection(requestParameters: BetaAppReviewDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailsResponse> {
        const response = await this.betaAppReviewDetailsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppReviewDetailsGetInstanceRaw(requestParameters: BetaAppReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBetaAppReviewDetails) {
            queryParameters['fields[betaAppReviewDetails]'] = requestParameters.fieldsBetaAppReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsGetInstance(requestParameters: BetaAppReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailResponse> {
        const response = await this.betaAppReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppReviewDetailsUpdateInstanceRaw(requestParameters: BetaAppReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsUpdateInstance.');
        }

        if (requestParameters.betaAppReviewDetailUpdateRequest === null || requestParameters.betaAppReviewDetailUpdateRequest === undefined) {
            throw new runtime.RequiredError('betaAppReviewDetailUpdateRequest','Required parameter requestParameters.betaAppReviewDetailUpdateRequest was null or undefined when calling betaAppReviewDetailsUpdateInstance.');
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
            path: `/v1/betaAppReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BetaAppReviewDetailUpdateRequestToJSON(requestParameters.betaAppReviewDetailUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsUpdateInstance(requestParameters: BetaAppReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailResponse> {
        const response = await this.betaAppReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum = {
    Name: 'name',
    BundleId: 'bundleId',
    Sku: 'sku',
    PrimaryLocale: 'primaryLocale',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    StreamlinedPurchasingEnabled: 'streamlinedPurchasingEnabled',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    CiProduct: 'ciProduct',
    BetaTesters: 'betaTesters',
    BetaGroups: 'betaGroups',
    AppStoreVersions: 'appStoreVersions',
    PreReleaseVersions: 'preReleaseVersions',
    BetaAppLocalizations: 'betaAppLocalizations',
    Builds: 'builds',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    AppInfos: 'appInfos',
    AppClips: 'appClips',
    AppPricePoints: 'appPricePoints',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    AppPriceSchedule: 'appPriceSchedule',
    AppAvailabilityV2: 'appAvailabilityV2',
    InAppPurchases: 'inAppPurchases',
    SubscriptionGroups: 'subscriptionGroups',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    PerfPowerMetrics: 'perfPowerMetrics',
    AppCustomProductPages: 'appCustomProductPages',
    InAppPurchasesV2: 'inAppPurchasesV2',
    PromotedPurchases: 'promotedPurchases',
    AppEvents: 'appEvents',
    ReviewSubmissions: 'reviewSubmissions',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    CustomerReviews: 'customerReviews',
    GameCenterDetail: 'gameCenterDetail',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AlternativeDistributionKey: 'alternativeDistributionKey',
    AnalyticsReportRequests: 'analyticsReportRequests',
    MarketplaceSearchDetail: 'marketplaceSearchDetail'
} as const;
export type BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum = typeof BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum[keyof typeof BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum = {
    ContactFirstName: 'contactFirstName',
    ContactLastName: 'contactLastName',
    ContactPhone: 'contactPhone',
    ContactEmail: 'contactEmail',
    DemoAccountName: 'demoAccountName',
    DemoAccountPassword: 'demoAccountPassword',
    DemoAccountRequired: 'demoAccountRequired',
    Notes: 'notes',
    App: 'app'
} as const;
export type BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum = typeof BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum[keyof typeof BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetCollectionFieldsAppsEnum = {
    Name: 'name',
    BundleId: 'bundleId',
    Sku: 'sku',
    PrimaryLocale: 'primaryLocale',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    StreamlinedPurchasingEnabled: 'streamlinedPurchasingEnabled',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    CiProduct: 'ciProduct',
    BetaTesters: 'betaTesters',
    BetaGroups: 'betaGroups',
    AppStoreVersions: 'appStoreVersions',
    PreReleaseVersions: 'preReleaseVersions',
    BetaAppLocalizations: 'betaAppLocalizations',
    Builds: 'builds',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    AppInfos: 'appInfos',
    AppClips: 'appClips',
    AppPricePoints: 'appPricePoints',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    AppPriceSchedule: 'appPriceSchedule',
    AppAvailabilityV2: 'appAvailabilityV2',
    InAppPurchases: 'inAppPurchases',
    SubscriptionGroups: 'subscriptionGroups',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    PerfPowerMetrics: 'perfPowerMetrics',
    AppCustomProductPages: 'appCustomProductPages',
    InAppPurchasesV2: 'inAppPurchasesV2',
    PromotedPurchases: 'promotedPurchases',
    AppEvents: 'appEvents',
    ReviewSubmissions: 'reviewSubmissions',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    CustomerReviews: 'customerReviews',
    GameCenterDetail: 'gameCenterDetail',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AlternativeDistributionKey: 'alternativeDistributionKey',
    AnalyticsReportRequests: 'analyticsReportRequests',
    MarketplaceSearchDetail: 'marketplaceSearchDetail'
} as const;
export type BetaAppReviewDetailsGetCollectionFieldsAppsEnum = typeof BetaAppReviewDetailsGetCollectionFieldsAppsEnum[keyof typeof BetaAppReviewDetailsGetCollectionFieldsAppsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetCollectionIncludeEnum = {
    App: 'app'
} as const;
export type BetaAppReviewDetailsGetCollectionIncludeEnum = typeof BetaAppReviewDetailsGetCollectionIncludeEnum[keyof typeof BetaAppReviewDetailsGetCollectionIncludeEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum = {
    ContactFirstName: 'contactFirstName',
    ContactLastName: 'contactLastName',
    ContactPhone: 'contactPhone',
    ContactEmail: 'contactEmail',
    DemoAccountName: 'demoAccountName',
    DemoAccountPassword: 'demoAccountPassword',
    DemoAccountRequired: 'demoAccountRequired',
    Notes: 'notes',
    App: 'app'
} as const;
export type BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum = typeof BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum[keyof typeof BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetInstanceFieldsAppsEnum = {
    Name: 'name',
    BundleId: 'bundleId',
    Sku: 'sku',
    PrimaryLocale: 'primaryLocale',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    StreamlinedPurchasingEnabled: 'streamlinedPurchasingEnabled',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    CiProduct: 'ciProduct',
    BetaTesters: 'betaTesters',
    BetaGroups: 'betaGroups',
    AppStoreVersions: 'appStoreVersions',
    PreReleaseVersions: 'preReleaseVersions',
    BetaAppLocalizations: 'betaAppLocalizations',
    Builds: 'builds',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    AppInfos: 'appInfos',
    AppClips: 'appClips',
    AppPricePoints: 'appPricePoints',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    AppPriceSchedule: 'appPriceSchedule',
    AppAvailabilityV2: 'appAvailabilityV2',
    InAppPurchases: 'inAppPurchases',
    SubscriptionGroups: 'subscriptionGroups',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    PerfPowerMetrics: 'perfPowerMetrics',
    AppCustomProductPages: 'appCustomProductPages',
    InAppPurchasesV2: 'inAppPurchasesV2',
    PromotedPurchases: 'promotedPurchases',
    AppEvents: 'appEvents',
    ReviewSubmissions: 'reviewSubmissions',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    CustomerReviews: 'customerReviews',
    GameCenterDetail: 'gameCenterDetail',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AlternativeDistributionKey: 'alternativeDistributionKey',
    AnalyticsReportRequests: 'analyticsReportRequests',
    MarketplaceSearchDetail: 'marketplaceSearchDetail'
} as const;
export type BetaAppReviewDetailsGetInstanceFieldsAppsEnum = typeof BetaAppReviewDetailsGetInstanceFieldsAppsEnum[keyof typeof BetaAppReviewDetailsGetInstanceFieldsAppsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetInstanceIncludeEnum = {
    App: 'app'
} as const;
export type BetaAppReviewDetailsGetInstanceIncludeEnum = typeof BetaAppReviewDetailsGetInstanceIncludeEnum[keyof typeof BetaAppReviewDetailsGetInstanceIncludeEnum];
