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
import type { CiTestDestinationKind } from './CiTestDestinationKind';
import {
    CiTestDestinationKindFromJSON,
    CiTestDestinationKindFromJSONTyped,
    CiTestDestinationKindToJSON,
} from './CiTestDestinationKind';

/**
 * 
 * @export
 * @interface CiTestDestination
 */
export interface CiTestDestination {
    /**
     * 
     * @type {string}
     * @memberof CiTestDestination
     */
    deviceTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof CiTestDestination
     */
    deviceTypeIdentifier?: string;
    /**
     * 
     * @type {string}
     * @memberof CiTestDestination
     */
    runtimeName?: string;
    /**
     * 
     * @type {string}
     * @memberof CiTestDestination
     */
    runtimeIdentifier?: string;
    /**
     * 
     * @type {CiTestDestinationKind}
     * @memberof CiTestDestination
     */
    kind?: CiTestDestinationKind;
}

/**
 * Check if a given object implements the CiTestDestination interface.
 */
export function instanceOfCiTestDestination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiTestDestinationFromJSON(json: any): CiTestDestination {
    return CiTestDestinationFromJSONTyped(json, false);
}

export function CiTestDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestDestination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceTypeName': !exists(json, 'deviceTypeName') ? undefined : json['deviceTypeName'],
        'deviceTypeIdentifier': !exists(json, 'deviceTypeIdentifier') ? undefined : json['deviceTypeIdentifier'],
        'runtimeName': !exists(json, 'runtimeName') ? undefined : json['runtimeName'],
        'runtimeIdentifier': !exists(json, 'runtimeIdentifier') ? undefined : json['runtimeIdentifier'],
        'kind': !exists(json, 'kind') ? undefined : CiTestDestinationKindFromJSON(json['kind']),
    };
}

export function CiTestDestinationToJSON(value?: CiTestDestination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceTypeName': value.deviceTypeName,
        'deviceTypeIdentifier': value.deviceTypeIdentifier,
        'runtimeName': value.runtimeName,
        'runtimeIdentifier': value.runtimeIdentifier,
        'kind': CiTestDestinationKindToJSON(value.kind),
    };
}

