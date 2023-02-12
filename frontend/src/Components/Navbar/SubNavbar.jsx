import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const SubNavbar = () => {
  return (
    <Box w="100%" color={"white"} h={50} bg={"#0D6DD7"}>
      <Flex
        h={"100%"}
        alignItems={"center"}
        w="60%"
        justifyContent={"space-around"}
        m={"auto"}
      >
        <Link to={"/products"}>
          <Text fontSize={"20px"}>Products</Text>
        </Link>
        <Link to={"/"}>
          <Text fontSize={"20px"}>Men</Text>
        </Link>
        <Link to={"/"}>
          <Text fontSize={"20px"}>Women</Text>
        </Link>
        <Link to={"/"}>
          <Text fontSize={"20px"}>Electronics</Text>
        </Link>
        <Link to={"/"}>
          <Text fontSize={"20px"}>About Us</Text>
        </Link>
      </Flex>
    </Box>
  );
};
