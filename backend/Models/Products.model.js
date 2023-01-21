const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  Brand: { type: String },
  Image1: { type: String },
  Image2: { type: String },
  Image3: { type: String },
  Image4: { type: String },
  Image5: { type: String },
  Rating: { type: String },
  Product_Title: { type: String },
  category: { type: String },
  Mens: { type: String },
  Price: { type: Number },
  MRP: { type: Number },
  Discount: { type: Number },
});

const ProductsModel = mongoose.model("allproduct", productsSchema);

module.exports = { ProductsModel };
