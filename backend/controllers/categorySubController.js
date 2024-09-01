
let SubCategory = require("../model/subCategorySchema")

let categorySubController = async  (req,res) =>{
 let {name,ownerid,categoryid} = req.body;

 
 let category = new SubCategory({
    name:name,
    ownerid:ownerid,
    categoryid:categoryid,
 })
 category.save();
   res.send({success:'SubCategory Created Successfully'});
}
module.exports = categorySubController;