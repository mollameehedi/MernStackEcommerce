const SubCategory = require("../model/SubCategorySchema");



let subCategoryController = async  (req,res) =>{

 let {name,ownerid,categoryid} = req.body;
let subcategory = new SubCategory({
      name:name,
      ownerid:ownerid ,
      categoryid:categoryid ,

})
subcategory.save();
res.send({success:"Subcategory Created Successfull"})

}
module.exports = subCategoryController;