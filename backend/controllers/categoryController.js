
let Category = require("../model/categoryModel")

let categoryController = async  (req,res) =>{
 let {name,ownerId} = req.body;

 let category = new Category({
    name:name,
    ownerid:ownerId
 })
 category.save();
   res.send({success:'Created Successfully'});
}
module.exports = categoryController;