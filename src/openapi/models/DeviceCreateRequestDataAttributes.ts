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
import type { BundleIdPlatform } from './BundleIdPlatform';
import {
    BundleIdPlatformFromJSON,
    BundleIdPlatformFromJSONTyped,
    BundleIdPlatformToJSON,
} from './BundleIdPlatform';

/**
 * 
 * @export
 * @interface DeviceCreateRequestDataAttributes
 */
export interface DeviceCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof DeviceCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof DeviceCreateRequestDataAttributes
     */
    platform: BundleIdPlatform;
    /**
     * 
     * @type {string}
     * @memberof DeviceCreateRequestDataAttributes
     */
    udid: string;
}

/**
 * Check if a given object implements the DeviceCreateRequestDataAttributes interface.
 */
export function instanceOfDeviceCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "udid" in value;

    return isInstance;
}

export function DeviceCreateRequestDataAttributesFromJSON(json: any): DeviceCreateRequestDataAttributes {
    return DeviceCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function DeviceCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'platform': BundleIdPlatformFromJSON(json['platform']),
        'udid': json['udid'],
    };
}

export function DeviceCreateRequestDataAttributesToJSON(value?: DeviceCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'platform': BundleIdPlatformToJSON(value.platform),
        'udid': value.udid,
    };
}

