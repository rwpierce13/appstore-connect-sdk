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
import type { CiProductAttributes } from './CiProductAttributes';
import {
    CiProductAttributesFromJSON,
    CiProductAttributesFromJSONTyped,
    CiProductAttributesToJSON,
} from './CiProductAttributes';
import type { CiProductRelationships } from './CiProductRelationships';
import {
    CiProductRelationshipsFromJSON,
    CiProductRelationshipsFromJSONTyped,
    CiProductRelationshipsToJSON,
} from './CiProductRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface CiProduct
 */
export interface CiProduct {
    /**
     * 
     * @type {string}
     * @memberof CiProduct
     */
    type: CiProductTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiProduct
     */
    id: string;
    /**
     * 
     * @type {CiProductAttributes}
     * @memberof CiProduct
     */
    attributes?: CiProductAttributes;
    /**
     * 
     * @type {CiProductRelationships}
     * @memberof CiProduct
     */
    relationships?: CiProductRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof CiProduct
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const CiProductTypeEnum = {
    CiProducts: 'ciProducts'
} as const;
export type CiProductTypeEnum = typeof CiProductTypeEnum[keyof typeof CiProductTypeEnum];


/**
 * Check if a given object implements the CiProduct interface.
 */
export function instanceOfCiProduct(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiProductFromJSON(json: any): CiProduct {
    return CiProductFromJSONTyped(json, false);
}

export function CiProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : CiProductAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : CiProductRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function CiProductToJSON(value?: CiProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CiProductAttributesToJSON(value.attributes),
        'relationships': CiProductRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

