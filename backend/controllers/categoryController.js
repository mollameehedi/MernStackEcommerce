
let Category = require("../model/categoryModel")

let categoryController = async  (req,res) =>{
 let {name,ownerid} = req.body;

 let category = new Category({
    name:name,
    ownerid:ownerid
 })
 category.save();
   res.send({success:'Created Successfully'});
}
module.exports = categoryController;