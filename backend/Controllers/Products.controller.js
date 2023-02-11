const { ProductsModel } = require("../Models/Products.model");

const getAllProducts = async (req, res) => {
  let data = await ProductsModel.find({});
  res.send(data);
};

const getAllProductsDetails = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  let data = await ProductsModel.findOne({ _id: id });
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

const getAllProductsMens = async (req, res) => {
  let data = await ProductsModel.find({ category: "Mens" });
  res.send(data);
};
const getAllProductsWomens = async (req, res) => {
  let data = await ProductsModel.find({ category: "Women" });
  res.send(data);
};
const getAllProductsKids = async (req, res) => {
  let data = await ProductsModel.find({ category: "kids" });
  res.send(data);
};
const getAllProductsElectronics = async (req, res) => {
  let data = await ProductsModel.find({ category: "Electronics" });
  res.send(data);
};

module.exports = {
  getAllProducts,
  getAllFilterProducts,
  getAllProductsDetails,
  getAllProductsMens,
  getAllProductsWomens,
  getAllProductsKids,
  getAllProductsElectronics,
};
