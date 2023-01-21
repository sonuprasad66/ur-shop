const { ProductsModel } = require("../Models/Products.model");

const getAllProducts = async (req, res) => {
  let data = await ProductsModel.find({});
  res.send(data);
};

module.exports = {
  getAllProducts,
};
