const express = require("express");
const Cart = require("../Models/Cart.model");
const User = require("../Models/User.model");

const app = express.Router();

const getCartData = async (req, res) => {
  try {
    let items = await Cart.find({
      user: req.userId,
    }).populate(["user", "product"]);
    res.send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const addToCart = async (req, res) => {
  try {
    let cartItem = await Cart.findOne({
      product: req.body.product,
    });

    if (cartItem) {
      if (cartItem.product.quantity < req.body.quantity) {
        return res.send(
          `This item is not able in the required quanitity, max quanity allowed is ${cartItem.product.quantity}`
        );
      }

      let item = await Cart.findByIdAndUpdate(
        cartItem.id,
        {
          quantity: req.body.quantity,
        },
        {
          new: true,
        }
      ).populate("product");
      return res.send(item);
    } else {
      console.log(req.body);
      let item = await Cart.create({
        ...req.body,
        user: req.userId,
      });
      return res.send(item);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteCartProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let deletedData = await Cart.findByIdAndDelete(id);
    res.status(200).send(deletedData);
  } catch (er) {
    res.status(500).send(er.message);
  }
};

const updateCartProduct = async (req, res) => {
  const id = req.params.id;
  let singleProduct = await Cart.findOne({ userId: userData.id, product: pid });
  try {
    let updateData = await Cart.findByIdAndUpdate(
      id,
      { quantity: req.body.quantity },
      { new: true }
    );
    res.status(200).send(updateData);
  } catch (er) {
    res.status(500).send(er.message);
  }
};



module.exports = {
  getCartData,
  addToCart,
  deleteCartProduct,
  updateCartProduct,
};
