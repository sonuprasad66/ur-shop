const express = require("express");
const productsRouter = express.Router();
const {
  getAllProducts,
  getAllFilterProducts,
  getAllProductsDetails,
  getAllProductsMens,
  getAllProductsWomens,
  getAllProductsKids,
  getAllProductsElectronics,
} = require("../Controllers/Products.controller");

productsRouter.get("/getAllProducts", getAllProducts);
productsRouter.get("/getAllProductsDetails/:id", getAllProductsDetails);
productsRouter.get("/getAllFilterProducts", getAllFilterProducts);

productsRouter.get("/getAllProductsMens", getAllProductsMens);
productsRouter.get("/getAllProductsWomens", getAllProductsWomens);
productsRouter.get("/getAllProductsKids", getAllProductsKids);
productsRouter.get("/getAllProductsElectronics", getAllProductsElectronics);

module.exports = {
  productsRouter,
};
