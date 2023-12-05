'use strict';

/**
 * homehero service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homehero.homehero');
