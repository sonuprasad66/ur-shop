import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <Box>
      <CartCard />
      <CartDetails />
    </Box>
  );
};

export default Cart;
