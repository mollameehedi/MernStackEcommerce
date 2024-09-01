const SubCategory = require("../model/subCategorySchema");

let allSubCategoryController = async (req, res) => {
  let data = await SubCategory.find({}).populate(["ownerid","categoryid"]);

  res.send(data);
};

module.exports = allSubCategoryController;