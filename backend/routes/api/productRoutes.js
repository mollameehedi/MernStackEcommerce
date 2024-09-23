const express = require("express");
const _ = express.Router()


const categoryController = require("../../controllers/categoryController");
const Category = require("../../model/categoryModel");
const allCategoryController = require("../../controllers/allCategoryController");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const editCategoryController = require("../../controllers/editCategoryController");
const approveCategoryController = require("../../controllers/approveCategoryController");

const categorySubController = require("../../controllers/categorySubController");
const allSubCategoryController = require("../../controllers/allSubCategoryController");
const deleteSubCategoryController = require("../../controllers/deleteSubCategoryController");
const editSubCategoryController = require("../../controllers/editSubCategoryController");

const productController = require("../../controllers/productController");

const createStoreController = require("../../controllers/createStoreController");
const allStoreController = require("../../controllers/allStoreController");

const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });





_.post('/categorycreate', categoryController)
_.get('/allcategory',allCategoryController)
_.post("/deletecategory", deleteCategoryController);
_.post("/editcategory", editCategoryController);

_.post('/categorysubcreate', categorySubController)
_.get('/allsubcategory',allSubCategoryController)
_.post("/deletesubcategory", deleteSubCategoryController);
_.post("/editsubcategory", editSubCategoryController);
_.post("/approvecategory", approveCategoryController);

// _.post("/products" , productController);
_.post("/products", upload.single("avatar"), productController);

_.post("/createstore", createStoreController);
_.get("/allstore/:id", allStoreController);




module.exports = _;