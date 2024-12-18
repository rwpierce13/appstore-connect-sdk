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
  EndAppAvailabilityPreOrderCreateRequest,
  EndAppAvailabilityPreOrderResponse,
  ErrorResponse,
} from '../models';
import {
    EndAppAvailabilityPreOrderCreateRequestFromJSON,
    EndAppAvailabilityPreOrderCreateRequestToJSON,
    EndAppAvailabilityPreOrderResponseFromJSON,
    EndAppAvailabilityPreOrderResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface EndAppAvailabilityPreOrdersCreateInstanceRequest {
    endAppAvailabilityPreOrderCreateRequest: EndAppAvailabilityPreOrderCreateRequest;
}

/**
 * 
 */
export class EndAppAvailabilityPreOrdersApi extends runtime.BaseAPI {

    /**
     */
    async endAppAvailabilityPreOrdersCreateInstanceRaw(requestParameters: EndAppAvailabilityPreOrdersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EndAppAvailabilityPreOrderResponse>> {
        if (requestParameters.endAppAvailabilityPreOrderCreateRequest === null || requestParameters.endAppAvailabilityPreOrderCreateRequest === undefined) {
            throw new runtime.RequiredError('endAppAvailabilityPreOrderCreateRequest','Required parameter requestParameters.endAppAvailabilityPreOrderCreateRequest was null or undefined when calling endAppAvailabilityPreOrdersCreateInstance.');
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
            path: `/v1/endAppAvailabilityPreOrders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EndAppAvailabilityPreOrderCreateRequestToJSON(requestParameters.endAppAvailabilityPreOrderCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EndAppAvailabilityPreOrderResponseFromJSON(jsonValue));
    }

    /**
     */
    async endAppAvailabilityPreOrdersCreateInstance(requestParameters: EndAppAvailabilityPreOrdersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EndAppAvailabilityPreOrderResponse> {
        const response = await this.endAppAvailabilityPreOrdersCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
