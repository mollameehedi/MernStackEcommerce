
let SubCategory = require("../model/subCategorySchema")

let deleteSubCategoryController = async  (req,res) =>{
 let {id} = req.body;
 await SubCategory.findByIdAndDelete({_id:id});
  res.send({success:'Category Deleted Successfully'});
}
module.exports = deleteSubCategoryController;