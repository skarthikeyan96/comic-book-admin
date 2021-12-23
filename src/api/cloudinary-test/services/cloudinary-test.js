'use strict';

/**
 * cloudinary-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloudinary-test.cloudinary-test');
