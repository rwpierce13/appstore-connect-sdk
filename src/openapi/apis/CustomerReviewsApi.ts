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
  CustomerReviewResponse,
  CustomerReviewResponseV1Response,
  ErrorResponse,
} from '../models';
import {
    CustomerReviewResponseFromJSON,
    CustomerReviewResponseToJSON,
    CustomerReviewResponseV1ResponseFromJSON,
    CustomerReviewResponseV1ResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface CustomerReviewsGetInstanceRequest {
    id: string;
    fieldsCustomerReviews?: Array<CustomerReviewsGetInstanceFieldsCustomerReviewsEnum>;
    fieldsCustomerReviewResponses?: Array<CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum>;
    include?: Array<CustomerReviewsGetInstanceIncludeEnum>;
}

export interface CustomerReviewsResponseGetToOneRelatedRequest {
    id: string;
    fieldsCustomerReviewResponses?: Array<CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum>;
    fieldsCustomerReviews?: Array<CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum>;
    include?: Array<CustomerReviewsResponseGetToOneRelatedIncludeEnum>;
}

/**
 * 
 */
export class CustomerReviewsApi extends runtime.BaseAPI {

    /**
     */
    async customerReviewsGetInstanceRaw(requestParameters: CustomerReviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerReviewResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customerReviewsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCustomerReviews) {
            queryParameters['fields[customerReviews]'] = requestParameters.fieldsCustomerReviews.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCustomerReviewResponses) {
            queryParameters['fields[customerReviewResponses]'] = requestParameters.fieldsCustomerReviewResponses.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/customerReviews/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerReviewResponseFromJSON(jsonValue));
    }

    /**
     */
    async customerReviewsGetInstance(requestParameters: CustomerReviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerReviewResponse> {
        const response = await this.customerReviewsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async customerReviewsResponseGetToOneRelatedRaw(requestParameters: CustomerReviewsResponseGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerReviewResponseV1Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customerReviewsResponseGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCustomerReviewResponses) {
            queryParameters['fields[customerReviewResponses]'] = requestParameters.fieldsCustomerReviewResponses.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCustomerReviews) {
            queryParameters['fields[customerReviews]'] = requestParameters.fieldsCustomerReviews.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/customerReviews/{id}/response`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerReviewResponseV1ResponseFromJSON(jsonValue));
    }

    /**
     */
    async customerReviewsResponseGetToOneRelated(requestParameters: CustomerReviewsResponseGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerReviewResponseV1Response> {
        const response = await this.customerReviewsResponseGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CustomerReviewsGetInstanceFieldsCustomerReviewsEnum = {
    Rating: 'rating',
    Title: 'title',
    Body: 'body',
    ReviewerNickname: 'reviewerNickname',
    CreatedDate: 'createdDate',
    Territory: 'territory',
    Response: 'response'
} as const;
export type CustomerReviewsGetInstanceFieldsCustomerReviewsEnum = typeof CustomerReviewsGetInstanceFieldsCustomerReviewsEnum[keyof typeof CustomerReviewsGetInstanceFieldsCustomerReviewsEnum];
/**
 * @export
 */
export const CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum = {
    ResponseBody: 'responseBody',
    LastModifiedDate: 'lastModifiedDate',
    State: 'state',
    Review: 'review'
} as const;
export type CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum = typeof CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum[keyof typeof CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum];
/**
 * @export
 */
export const CustomerReviewsGetInstanceIncludeEnum = {
    Response: 'response'
} as const;
export type CustomerReviewsGetInstanceIncludeEnum = typeof CustomerReviewsGetInstanceIncludeEnum[keyof typeof CustomerReviewsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum = {
    ResponseBody: 'responseBody',
    LastModifiedDate: 'lastModifiedDate',
    State: 'state',
    Review: 'review'
} as const;
export type CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum = typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum[keyof typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum];
/**
 * @export
 */
export const CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum = {
    Rating: 'rating',
    Title: 'title',
    Body: 'body',
    ReviewerNickname: 'reviewerNickname',
    CreatedDate: 'createdDate',
    Territory: 'territory',
    Response: 'response'
} as const;
export type CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum = typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum[keyof typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum];
/**
 * @export
 */
export const CustomerReviewsResponseGetToOneRelatedIncludeEnum = {
    Review: 'review'
} as const;
export type CustomerReviewsResponseGetToOneRelatedIncludeEnum = typeof CustomerReviewsResponseGetToOneRelatedIncludeEnum[keyof typeof CustomerReviewsResponseGetToOneRelatedIncludeEnum];
