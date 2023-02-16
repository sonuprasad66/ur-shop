const { ProductsModel } = require("../Models/Products.model");

const getAllProducts = async (req, res) => {
  let data = await ProductsModel.find({});
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

const getAllProductsDetails = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  let data = await ProductsModel.findOne({ _id: id });
  res.send(data);
};

// ---------------------All Filter Part--------------------------------

const getAllFilterProducts = async (req, res) => {
  const { brand, category, price, page, limit } = req.query;

  let data;

  if (brand && category) {
    data = await ProductsModel.find({
      Brand: { $in: [...brand] },
      category: { $in: [...category] },
    })
      .skip((page - 1) * limit)
      .limit(limit);
  } else if (brand) {
    data = await ProductsModel.find({
      Brand: { $in: [...brand] },
    })
      .skip((page - 1) * limit)
      .limit(limit);
  } else if (category) {
    data = await ProductsModel.find({
      category: { $in: [...category] },
    })
      .skip((page - 1) * limit)
      .limit(limit);
  } else if (price) {
    let new_price = Number(price[price.length - 1]);
    console.log(new_price);
    data = await ProductsModel.find({ Price: { $lte: new_price } })
      .skip((page - 1) * limit)
      .limit(limit);
  } else {
    data = await ProductsModel.find()
      .skip((page - 1) * limit)
      .limit(limit);
  }
  res.send(data);
};

const getAllDataSortByPrice = async (req, res) => {
  const { order } = req.query;
  let data = await ProductsModel.find().sort({
    Price: order == "asc" ? 1 : -1,
  });
  res.send(data);
};

const getAllDataSortByDiscount = async (req, res) => {
  const { order } = req.query;
  let data = await ProductsModel.find().sort({
    Discount: order == "asc" ? 1 : -1,
  });
  res.send(data);
};

const getAllDataSortByRating = async (req, res) => {
  const { order } = req.query;
  let data = await ProductsModel.find().sort({
    Rating: order == "asc" ? 1 : -1,
  });
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
  getAllDataSortByPrice,
  getAllDataSortByDiscount,
  getAllDataSortByRating,
};
