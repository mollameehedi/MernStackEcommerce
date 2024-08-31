const express = require("express");
const categoryController = require("../../controllers/categoryController");
const Category = require("../../model/categoryModel");
const allCategoryController = require("../../controllers/allCategoryController");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const editCategoryController = require("../../controllers/editCategoryController");
const subCategoryController = require("../../controllers/subCategoryController");
const _ = express.Router()

_.post('/categorycreate', categoryController)
_.get('/allcategory',allCategoryController)
_.post("/deletecategory", deleteCategoryController);
_.post("/editcategory", editCategoryController);
_.post("/subcategory", subCategoryController);




module.exports = _;