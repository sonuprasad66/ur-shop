import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { Home } from "../Pages/Home";
import { PaymentPage } from "../Pages/PaymentPage";

export const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Box>
  );
};
