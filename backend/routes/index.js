const express = require("express");
const _ = express.Router()
const apiRoutes = require("./api")

const api = process.env.BASE_URL || '/api/v1'
// /api/v1/

_.use(api,apiRoutes)

_.use(api, (req, res) => res.json("No Api Found On This Route"));


module.exports = _;