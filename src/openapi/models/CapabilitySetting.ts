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
import type { CapabilityOption } from './CapabilityOption';
import {
    CapabilityOptionFromJSON,
    CapabilityOptionFromJSONTyped,
    CapabilityOptionToJSON,
} from './CapabilityOption';

/**
 * 
 * @export
 * @interface CapabilitySetting
 */
export interface CapabilitySetting {
    /**
     * 
     * @type {string}
     * @memberof CapabilitySetting
     */
    key?: CapabilitySettingKeyEnum;
    /**
     * 
     * @type {string}
     * @memberof CapabilitySetting
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CapabilitySetting
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CapabilitySetting
     */
    enabledByDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CapabilitySetting
     */
    visible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CapabilitySetting
     */
    allowedInstances?: CapabilitySettingAllowedInstancesEnum;
    /**
     * 
     * @type {number}
     * @memberof CapabilitySetting
     */
    minInstances?: number;
    /**
     * 
     * @type {Array<CapabilityOption>}
     * @memberof CapabilitySetting
     */
    options?: Array<CapabilityOption>;
}


/**
 * @export
 */
export const CapabilitySettingKeyEnum = {
    IcloudVersion: 'ICLOUD_VERSION',
    DataProtectionPermissionLevel: 'DATA_PROTECTION_PERMISSION_LEVEL',
    AppleIdAuthAppConsent: 'APPLE_ID_AUTH_APP_CONSENT'
} as const;
export type CapabilitySettingKeyEnum = typeof CapabilitySettingKeyEnum[keyof typeof CapabilitySettingKeyEnum];

/**
 * @export
 */
export const CapabilitySettingAllowedInstancesEnum = {
    Entry: 'ENTRY',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type CapabilitySettingAllowedInstancesEnum = typeof CapabilitySettingAllowedInstancesEnum[keyof typeof CapabilitySettingAllowedInstancesEnum];


/**
 * Check if a given object implements the CapabilitySetting interface.
 */
export function instanceOfCapabilitySetting(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CapabilitySettingFromJSON(json: any): CapabilitySetting {
    return CapabilitySettingFromJSONTyped(json, false);
}

export function CapabilitySettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilitySetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'enabledByDefault': !exists(json, 'enabledByDefault') ? undefined : json['enabledByDefault'],
        'visible': !exists(json, 'visible') ? undefined : json['visible'],
        'allowedInstances': !exists(json, 'allowedInstances') ? undefined : json['allowedInstances'],
        'minInstances': !exists(json, 'minInstances') ? undefined : json['minInstances'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(CapabilityOptionFromJSON)),
    };
}

export function CapabilitySettingToJSON(value?: CapabilitySetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'name': value.name,
        'description': value.description,
        'enabledByDefault': value.enabledByDefault,
        'visible': value.visible,
        'allowedInstances': value.allowedInstances,
        'minInstances': value.minInstances,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(CapabilityOptionToJSON)),
    };
}

