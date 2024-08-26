const express = require('express');
const _ = express.Router();
const authRoutes = require('./authRoutes.js');
const productRoutes = require('./productRoutes.js')

_.use('/auth',authRoutes)
_.use('/product',productRoutes)

module.exports = _;