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
import type { InAppPurchaseV2RelationshipsAppStoreReviewScreenshot } from './InAppPurchaseV2RelationshipsAppStoreReviewScreenshot';
import {
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON,
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped,
    InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON,
} from './InAppPurchaseV2RelationshipsAppStoreReviewScreenshot';
import type { InAppPurchaseV2RelationshipsContent } from './InAppPurchaseV2RelationshipsContent';
import {
    InAppPurchaseV2RelationshipsContentFromJSON,
    InAppPurchaseV2RelationshipsContentFromJSONTyped,
    InAppPurchaseV2RelationshipsContentToJSON,
} from './InAppPurchaseV2RelationshipsContent';
import type { InAppPurchaseV2RelationshipsIapPriceSchedule } from './InAppPurchaseV2RelationshipsIapPriceSchedule';
import {
    InAppPurchaseV2RelationshipsIapPriceScheduleFromJSON,
    InAppPurchaseV2RelationshipsIapPriceScheduleFromJSONTyped,
    InAppPurchaseV2RelationshipsIapPriceScheduleToJSON,
} from './InAppPurchaseV2RelationshipsIapPriceSchedule';
import type { InAppPurchaseV2RelationshipsImages } from './InAppPurchaseV2RelationshipsImages';
import {
    InAppPurchaseV2RelationshipsImagesFromJSON,
    InAppPurchaseV2RelationshipsImagesFromJSONTyped,
    InAppPurchaseV2RelationshipsImagesToJSON,
} from './InAppPurchaseV2RelationshipsImages';
import type { InAppPurchaseV2RelationshipsInAppPurchaseAvailability } from './InAppPurchaseV2RelationshipsInAppPurchaseAvailability';
import {
    InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityFromJSON,
    InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityFromJSONTyped,
    InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityToJSON,
} from './InAppPurchaseV2RelationshipsInAppPurchaseAvailability';
import type { InAppPurchaseV2RelationshipsInAppPurchaseLocalizations } from './InAppPurchaseV2RelationshipsInAppPurchaseLocalizations';
import {
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSON,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSONTyped,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsToJSON,
} from './InAppPurchaseV2RelationshipsInAppPurchaseLocalizations';
import type { InAppPurchaseV2RelationshipsPricePoints } from './InAppPurchaseV2RelationshipsPricePoints';
import {
    InAppPurchaseV2RelationshipsPricePointsFromJSON,
    InAppPurchaseV2RelationshipsPricePointsFromJSONTyped,
    InAppPurchaseV2RelationshipsPricePointsToJSON,
} from './InAppPurchaseV2RelationshipsPricePoints';
import type { InAppPurchaseV2RelationshipsPromotedPurchase } from './InAppPurchaseV2RelationshipsPromotedPurchase';
import {
    InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON,
    InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped,
    InAppPurchaseV2RelationshipsPromotedPurchaseToJSON,
} from './InAppPurchaseV2RelationshipsPromotedPurchase';

/**
 * 
 * @export
 * @interface InAppPurchaseV2Relationships
 */
export interface InAppPurchaseV2Relationships {
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsInAppPurchaseLocalizations}
     * @memberof InAppPurchaseV2Relationships
     */
    inAppPurchaseLocalizations?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizations;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsPricePoints}
     * @memberof InAppPurchaseV2Relationships
     */
    pricePoints?: InAppPurchaseV2RelationshipsPricePoints;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsContent}
     * @memberof InAppPurchaseV2Relationships
     */
    content?: InAppPurchaseV2RelationshipsContent;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsAppStoreReviewScreenshot}
     * @memberof InAppPurchaseV2Relationships
     */
    appStoreReviewScreenshot?: InAppPurchaseV2RelationshipsAppStoreReviewScreenshot;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsPromotedPurchase}
     * @memberof InAppPurchaseV2Relationships
     */
    promotedPurchase?: InAppPurchaseV2RelationshipsPromotedPurchase;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsIapPriceSchedule}
     * @memberof InAppPurchaseV2Relationships
     */
    iapPriceSchedule?: InAppPurchaseV2RelationshipsIapPriceSchedule;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsInAppPurchaseAvailability}
     * @memberof InAppPurchaseV2Relationships
     */
    inAppPurchaseAvailability?: InAppPurchaseV2RelationshipsInAppPurchaseAvailability;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsImages}
     * @memberof InAppPurchaseV2Relationships
     */
    images?: InAppPurchaseV2RelationshipsImages;
}

/**
 * Check if a given object implements the InAppPurchaseV2Relationships interface.
 */
export function instanceOfInAppPurchaseV2Relationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsFromJSON(json: any): InAppPurchaseV2Relationships {
    return InAppPurchaseV2RelationshipsFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2Relationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inAppPurchaseLocalizations': !exists(json, 'inAppPurchaseLocalizations') ? undefined : InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSON(json['inAppPurchaseLocalizations']),
        'pricePoints': !exists(json, 'pricePoints') ? undefined : InAppPurchaseV2RelationshipsPricePointsFromJSON(json['pricePoints']),
        'content': !exists(json, 'content') ? undefined : InAppPurchaseV2RelationshipsContentFromJSON(json['content']),
        'appStoreReviewScreenshot': !exists(json, 'appStoreReviewScreenshot') ? undefined : InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON(json['appStoreReviewScreenshot']),
        'promotedPurchase': !exists(json, 'promotedPurchase') ? undefined : InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON(json['promotedPurchase']),
        'iapPriceSchedule': !exists(json, 'iapPriceSchedule') ? undefined : InAppPurchaseV2RelationshipsIapPriceScheduleFromJSON(json['iapPriceSchedule']),
        'inAppPurchaseAvailability': !exists(json, 'inAppPurchaseAvailability') ? undefined : InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityFromJSON(json['inAppPurchaseAvailability']),
        'images': !exists(json, 'images') ? undefined : InAppPurchaseV2RelationshipsImagesFromJSON(json['images']),
    };
}

export function InAppPurchaseV2RelationshipsToJSON(value?: InAppPurchaseV2Relationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inAppPurchaseLocalizations': InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsToJSON(value.inAppPurchaseLocalizations),
        'pricePoints': InAppPurchaseV2RelationshipsPricePointsToJSON(value.pricePoints),
        'content': InAppPurchaseV2RelationshipsContentToJSON(value.content),
        'appStoreReviewScreenshot': InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON(value.appStoreReviewScreenshot),
        'promotedPurchase': InAppPurchaseV2RelationshipsPromotedPurchaseToJSON(value.promotedPurchase),
        'iapPriceSchedule': InAppPurchaseV2RelationshipsIapPriceScheduleToJSON(value.iapPriceSchedule),
        'inAppPurchaseAvailability': InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityToJSON(value.inAppPurchaseAvailability),
        'images': InAppPurchaseV2RelationshipsImagesToJSON(value.images),
    };
}

