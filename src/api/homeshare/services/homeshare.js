'use strict';

/**
 * homeshare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homeshare.homeshare');
