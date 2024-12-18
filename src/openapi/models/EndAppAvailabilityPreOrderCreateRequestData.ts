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
import type { EndAppAvailabilityPreOrderCreateRequestDataRelationships } from './EndAppAvailabilityPreOrderCreateRequestDataRelationships';
import {
    EndAppAvailabilityPreOrderCreateRequestDataRelationshipsFromJSON,
    EndAppAvailabilityPreOrderCreateRequestDataRelationshipsFromJSONTyped,
    EndAppAvailabilityPreOrderCreateRequestDataRelationshipsToJSON,
} from './EndAppAvailabilityPreOrderCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface EndAppAvailabilityPreOrderCreateRequestData
 */
export interface EndAppAvailabilityPreOrderCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof EndAppAvailabilityPreOrderCreateRequestData
     */
    type: EndAppAvailabilityPreOrderCreateRequestDataTypeEnum;
    /**
     * 
     * @type {EndAppAvailabilityPreOrderCreateRequestDataRelationships}
     * @memberof EndAppAvailabilityPreOrderCreateRequestData
     */
    relationships: EndAppAvailabilityPreOrderCreateRequestDataRelationships;
}


/**
 * @export
 */
export const EndAppAvailabilityPreOrderCreateRequestDataTypeEnum = {
    EndAppAvailabilityPreOrders: 'endAppAvailabilityPreOrders'
} as const;
export type EndAppAvailabilityPreOrderCreateRequestDataTypeEnum = typeof EndAppAvailabilityPreOrderCreateRequestDataTypeEnum[keyof typeof EndAppAvailabilityPreOrderCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the EndAppAvailabilityPreOrderCreateRequestData interface.
 */
export function instanceOfEndAppAvailabilityPreOrderCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function EndAppAvailabilityPreOrderCreateRequestDataFromJSON(json: any): EndAppAvailabilityPreOrderCreateRequestData {
    return EndAppAvailabilityPreOrderCreateRequestDataFromJSONTyped(json, false);
}

export function EndAppAvailabilityPreOrderCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndAppAvailabilityPreOrderCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': EndAppAvailabilityPreOrderCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function EndAppAvailabilityPreOrderCreateRequestDataToJSON(value?: EndAppAvailabilityPreOrderCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': EndAppAvailabilityPreOrderCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
