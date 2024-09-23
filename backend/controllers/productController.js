const Products = require("../model/productSchema");

let productController = (req, res) => {
  let { name, description,  regularprice, salesprice, quantity } =
    req.body;
    if (!req.file) {
      return res.status(400).send({ error: "Image file is required." });
    }

  let product = new Products({
    name: name,
    description: description,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    salesprice: salesprice,
    quantity: quantity,
  });
  product.save();

  res.send({ success: "Product Created" });
};

module.exports = productController;