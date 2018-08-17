// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var Temperature = require('../models/temperature')

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

Temperature.methods(['get', 'post']);
Temperature.register(router, '/temps');

// Return router
module.exports = router;