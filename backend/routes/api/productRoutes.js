const express = require("express");
const categoryController = require("../../controllers/categoryController");
const Category = require("../../model/categoryModel");
const _ = express.Router()

_.post('/categorycreate', categoryController)
_.get('/allcategory', async function(req ,res){
    let category = await Category.find({}).populate("ownerid")
    console.log(category);
    res.send(category)

    
})




module.exports = _;