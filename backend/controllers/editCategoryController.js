
let Category = require("../model/categoryModel")

let editCategoryController = async  (req,res) =>{
 let {id,name} = req.body;
 await Category.findByIdAndUpdate({_id:id},{name:name});
  res.send({success:'Category Updated Successfully'});
}
module.exports = editCategoryController;