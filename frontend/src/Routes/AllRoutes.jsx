import React from "react";
import Cart from "../cart/Cart";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import { Login } from "../Components/Register/Login";
import { Signup } from "../Components/Register/Signup";
import { Products } from "../Pages/ProductsPage/Products";
import { ProductsDetails } from "../Pages/ProductsDetails/ProductsDetails";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
