import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

const CartDetails = () => {
  return (
    <Box
      w="20%"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      p="6"
      rounded="md"
      bg="white"
    >
      <Text color="#212121" py={5}>
        PRICE DETAILS
      </Text>
      <Box borderY="1px solid #878787">
        <Flex justify="space-between" align="center" my={5}>
          <Text color="#212121">Price(2 items)</Text>
          <Text color="#212121">₹ 2497</Text>
        </Flex>
        <Flex justify="space-between" align="center" my={5}>
          <Text color="#212121">Discount</Text>
          <Text color={"#388F3C"}> - ₹1612</Text>
        </Flex>

        <Flex justify="space-between" align="center" my={5}>
          <Text color="#212121">Delivery Charges</Text>
          <Text color={"#388F3C"}>Free</Text>
        </Flex>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        my={5}
        fontWeight="bold"
        borderBottom={"1px solid #878787"}
        pb={5}
      >
        <Text color="#212121">Total Amount</Text>
        <Text color="#212121">₹ 885</Text>
      </Flex>
      <Text color={"#388F3C"} pb={3}>
        You will save ₹ {"1,612"} on this order
      </Text>
    </Box>
  );
};

export default CartDetails;
