const SubCategory = require("../model/subCategorySchema");

let singleCategoryController = async (req, res) => {
    let { slug } = req.query;
  console.log("asce", req.query);

    let data = await SubCategory.find({ categoryid: slug });
    console.log("aaaaaaaaaa",data)

    res.send(data);
};

module.exports = singleCategoryController;