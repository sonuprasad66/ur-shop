const express = require("express");
const productsRouter = express.Router();
const { getAllProducts } = require("../Controllers/Products.controller");

productsRouter.get("/getAllProducts", getAllProducts);

module.exports = {
  productsRouter,
};
