const Category = require("../model/categoryModel");

let allCategoryController = async (req, res) => {
  let data = await Category.find({}).populate("ownerid");

  res.send(data);
};

module.exports = allCategoryController;