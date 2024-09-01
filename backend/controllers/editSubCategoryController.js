
let SubCategory = require("../model/subCategorySchema")

let editSubCategoryController = async  (req,res) =>{
 let {id,name} = req.body;
 await SubCategory.findByIdAndUpdate({_id:id},{name:name});
  res.send({success:'Category Updated Successfully'});
}
module.exports = editSubCategoryController;