const express = require("express");
const productsRouter = express.Router();
const {
  getAllProducts,
  getAllFilterProducts,
  getAllProductsDetails,
} = require("../Controllers/Products.controller");

productsRouter.get("/getAllProducts", getAllProducts);
productsRouter.get("/getAllProductsDetails/:id", getAllProductsDetails);
productsRouter.get("/getAllFilterProducts", getAllFilterProducts);

module.exports = {
  productsRouter,
};
