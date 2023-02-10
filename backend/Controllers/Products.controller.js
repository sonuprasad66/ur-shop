const { ProductsModel } = require("../Models/Products.model");

const getAllProducts = async (req, res) => {
  let data = await ProductsModel.find({});
  res.send(data);
};

const getAllFilterProducts = async (req, res) => {
  const { brand, category } = req.query;
  let data;

  if (brand && category) {
    data = await ProductsModel.find({
      Brand: { $in: [...brand] },
      category: { $in: [...category] },
    });
  } else if (brand) {
    data = await ProductsModel.find({
      Brand: { $in: [...brand] },
    });
  } else if (category) {
    data = await ProductsModel.find({
      category: { $in: [...category] },
    });
  } else {
    data = await ProductsModel.find();
  }
  res.send(data);
};

module.exports = {
  getAllProducts,
  getAllFilterProducts,
};
