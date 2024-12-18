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
  ErrorResponse,
  InAppPurchasePricePointsResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InAppPurchasePricePointsResponseFromJSON,
    InAppPurchasePricePointsResponseToJSON,
} from '../models';

export interface InAppPurchasePricePointsEqualizationsGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    filterInAppPurchaseV2?: Array<string>;
    fieldsInAppPurchasePricePoints?: Array<InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsInAppPurchasePricePointsEnum>;
    fieldsTerritories?: Array<InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<InAppPurchasePricePointsEqualizationsGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class InAppPurchasePricePointsApi extends runtime.BaseAPI {

    /**
     */
    async inAppPurchasePricePointsEqualizationsGetToManyRelatedRaw(requestParameters: InAppPurchasePricePointsEqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchasePricePointsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchasePricePointsEqualizationsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterTerritory) {
            queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterInAppPurchaseV2) {
            queryParameters['filter[inAppPurchaseV2]'] = requestParameters.filterInAppPurchaseV2.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsInAppPurchasePricePoints) {
            queryParameters['fields[inAppPurchasePricePoints]'] = requestParameters.fieldsInAppPurchasePricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/inAppPurchasePricePoints/{id}/equalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchasePricePointsResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchasePricePointsEqualizationsGetToManyRelated(requestParameters: InAppPurchasePricePointsEqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchasePricePointsResponse> {
        const response = await this.inAppPurchasePricePointsEqualizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsInAppPurchasePricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    Territory: 'territory',
    Equalizations: 'equalizations'
} as const;
export type InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsInAppPurchasePricePointsEnum = typeof InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsInAppPurchasePricePointsEnum[keyof typeof InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsInAppPurchasePricePointsEnum];
/**
 * @export
 */
export const InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum = typeof InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum[keyof typeof InAppPurchasePricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const InAppPurchasePricePointsEqualizationsGetToManyRelatedIncludeEnum = {
    Territory: 'territory'
} as const;
export type InAppPurchasePricePointsEqualizationsGetToManyRelatedIncludeEnum = typeof InAppPurchasePricePointsEqualizationsGetToManyRelatedIncludeEnum[keyof typeof InAppPurchasePricePointsEqualizationsGetToManyRelatedIncludeEnum];
