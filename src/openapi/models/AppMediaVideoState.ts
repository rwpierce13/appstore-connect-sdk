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
import type { AppMediaStateError } from './AppMediaStateError';
import {
    AppMediaStateErrorFromJSON,
    AppMediaStateErrorFromJSONTyped,
    AppMediaStateErrorToJSON,
} from './AppMediaStateError';

/**
 * 
 * @export
 * @interface AppMediaVideoState
 */
export interface AppMediaVideoState {
    /**
     * 
     * @type {Array<AppMediaStateError>}
     * @memberof AppMediaVideoState
     */
    errors?: Array<AppMediaStateError>;
    /**
     * 
     * @type {Array<AppMediaStateError>}
     * @memberof AppMediaVideoState
     */
    warnings?: Array<AppMediaStateError>;
    /**
     * 
     * @type {string}
     * @memberof AppMediaVideoState
     */
    state?: AppMediaVideoStateStateEnum;
}


/**
 * @export
 */
export const AppMediaVideoStateStateEnum = {
    AwaitingUpload: 'AWAITING_UPLOAD',
    UploadComplete: 'UPLOAD_COMPLETE',
    Processing: 'PROCESSING',
    Complete: 'COMPLETE',
    Failed: 'FAILED'
} as const;
export type AppMediaVideoStateStateEnum = typeof AppMediaVideoStateStateEnum[keyof typeof AppMediaVideoStateStateEnum];


/**
 * Check if a given object implements the AppMediaVideoState interface.
 */
export function instanceOfAppMediaVideoState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppMediaVideoStateFromJSON(json: any): AppMediaVideoState {
    return AppMediaVideoStateFromJSONTyped(json, false);
}

export function AppMediaVideoStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppMediaVideoState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(AppMediaStateErrorFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(AppMediaStateErrorFromJSON)),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function AppMediaVideoStateToJSON(value?: AppMediaVideoState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(AppMediaStateErrorToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(AppMediaStateErrorToJSON)),
        'state': value.state,
    };
}

