'use strict';

require('./hub.js');

const vendorHandler = require('./vendor');
require('./driver');

vendorHandler.vendorHandler('1-206-Flowers');
