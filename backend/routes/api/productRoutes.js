const express = require("express");
const categoryController = require("../../controllers/categoryController");
const Category = require("../../model/categoryModel");
const allCategoryController = require("../../controllers/allCategoryController");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const editCategoryController = require("../../controllers/editCategoryController");

const categorySubController = require("../../controllers/categorySubController");
const allSubCategoryController = require("../../controllers/allSubCategoryController");
const deleteSubCategoryController = require("../../controllers/deleteSubCategoryController");
const editSubCategoryController = require("../../controllers/editSubCategoryController");
const _ = express.Router()

_.post('/categorycreate', categoryController)
_.get('/allcategory',allCategoryController)
_.post("/deletecategory", deleteCategoryController);
_.post("/editcategory", editCategoryController);

_.post('/categorysubcreate', categorySubController)
_.get('/allsubcategory',allSubCategoryController)
_.post("/deletesubcategory", deleteSubCategoryController);
_.post("/editsubcategory", editSubCategoryController);




module.exports = _;