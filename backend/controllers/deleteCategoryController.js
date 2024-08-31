
let Category = require("../model/categoryModel")

let deleteCategoryController = async  (req,res) =>{
 let {id} = req.body;
 await Category.findByIdAndDelete({_id:id});
  res.send({success:'Category Deleted Successfully'});
}
module.exports = deleteCategoryController;