import React from "react";
import { Route, Routes } from "react-router";
import { Products } from "../../ProductsPage/Products";
import { Login } from "../Components/Register/Login";
import { Signup } from "../Components/Register/Signup";
import Home from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
