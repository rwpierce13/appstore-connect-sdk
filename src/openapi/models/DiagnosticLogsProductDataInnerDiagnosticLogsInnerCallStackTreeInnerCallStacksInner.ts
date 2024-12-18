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
import type { DiagnosticLogCallStackNode } from './DiagnosticLogCallStackNode';
import {
    DiagnosticLogCallStackNodeFromJSON,
    DiagnosticLogCallStackNodeFromJSONTyped,
    DiagnosticLogCallStackNodeToJSON,
} from './DiagnosticLogCallStackNode';

/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner
 */
export interface DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner {
    /**
     * 
     * @type {Array<DiagnosticLogCallStackNode>}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner
     */
    callStackRootFrames?: Array<DiagnosticLogCallStackNode>;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callStackRootFrames': !exists(json, 'callStackRootFrames') ? undefined : ((json['callStackRootFrames'] as Array<any>).map(DiagnosticLogCallStackNodeFromJSON)),
    };
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerToJSON(value?: DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callStackRootFrames': value.callStackRootFrames === undefined ? undefined : ((value.callStackRootFrames as Array<any>).map(DiagnosticLogCallStackNodeToJSON)),
    };
}

