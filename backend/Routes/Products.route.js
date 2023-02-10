const express = require("express");
const productsRouter = express.Router();
const {
  getAllProducts,
  getAllFilterProducts,
} = require("../Controllers/Products.controller");

productsRouter.get("/getAllProducts", getAllProducts);
productsRouter.get("/getAllFilterProducts", getAllFilterProducts);

module.exports = {
  productsRouter,
};
