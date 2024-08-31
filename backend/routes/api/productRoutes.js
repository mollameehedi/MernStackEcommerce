const express = require("express");
const categoryController = require("../../controllers/categoryController");
const Category = require("../../model/categoryModel");
const allCategoryController = require("../../controllers/allCategoryController");
const subCategoryController = require("../../controllers/subCategoryController");
const _ = express.Router()

_.post('/categorycreate', categoryController)
_.get('/allcategory',allCategoryController)
_.post("/subcategory", subCategoryController);




module.exports = _;