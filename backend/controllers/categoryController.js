
let Category = require("../model/categoryModel")

let categoryController = async  (req,res) =>{
 let {name,ownerId} = req.body;

 let category = new Category({
    name:name,
    ownerid:ownerId
 })
 category.save();
 console.log(category);
    res.send(category);
}
module.exports = categoryController;