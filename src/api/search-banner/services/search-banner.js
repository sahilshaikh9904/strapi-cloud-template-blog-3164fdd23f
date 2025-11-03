'use strict';

/**
 * search-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::search-banner.search-banner');
