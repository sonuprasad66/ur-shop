import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <Box w={"90%"} m="auto">
      <Box display={["block","flex"]} justify={"space-between"}>
        <Box>
          {Array(3)
            .fill(0)
            .map((el) => (
              <CartCard />
            ))}
        </Box>
        <Box>
          {" "}
          <CartDetails />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
