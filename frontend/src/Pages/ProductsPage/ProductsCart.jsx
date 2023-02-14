import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ImStarEmpty } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ImStarEmpty } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "../../Redux/Products/action";
import { useNavigate } from "react-router-dom";
import { addCartData } from "../../Redux/Cart/cart.action";
import axios from "axios";

export const ProductsCart = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toogle, setToogle] = useState(false);
  const token = localStorage.getItem("token");

  const toast = useToast();

  // const isLoading = useSelector((state) => state.cart.loading);

  const handleDetails = (id) => {
    dispatch(getProductsDetails(id));
    navigate(`/products/${id}`);
  };

  const handleCart = (id) => {
    dispatch(addCartData({ product: id, qty: 1 })).then((res) => {
      if (res.status === "success") {
        toast({
          title: res.msg,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else if (res.status === "info") {
        toast({
          title: res.msg,
          status: "info",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Product Added Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  const addWishList = async (id) => {
    await axios
      .post(
        "http://localhost:8080/wishlist",
        { product: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setToogle(!toogle))
      .catch((er) => console.log(er));
    setToogle(!toogle);
  };

  const deleteWishlist = async (id) => {
    console.log(id);
    await axios
      .delete(`http://localhost:8080/wishlist/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setToogle(!toogle))
      .catch((er) => console.log(er));
  };

  return (
    <>
      <Box
        h={"400px"}
        p={4}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <Image
          src={products.Image1}
          alt="Product_Image"
          w={"100%"}
          h={"60%"}
          borderRadius={2}
          cursor={"pointer"}
          onClick={() => handleDetails(products._id)}
        />

        <Flex justifyContent={"space-between"} alignItems={"center"} mt={2}>
          <Heading size={"20px"}>{products.Brand}</Heading>
          {toogle ? (
            <AiFillHeart
              fontSize={"20px"}
              cursor={"pointer"}
              color="red"
              onClick={() => deleteWishlist(products._id)}
            />
          ) : (
            <FiHeart
              fontSize={"20px"}
              cursor={"pointer"}
              onClick={() => addWishList(products._id)}
            />
          )}
        </Flex>

        <Text fontSize={"15px"}>
          {products.Product_Title.slice(0, 20).trim() + " ..."}
        </Text>

        <Flex alignItems={"center"} mt={1} gap={"20px"}>
          <Flex alignItems={"center"} gap={1}>
            <Text fontSize={"15px"}>Rating: </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"15px"}
              h={"20px"}
              w={"45px"}
              gap={"3px"}
              color={"white"}
              bg={"green"}
              borderRadius={1}
            >
              <Text>{products.Rating}</Text>
              <ImStarEmpty fontSize={"12px"} />
            </Flex>
          </Flex>
          <Heading size={"20px"}>Rs.{products.Price}</Heading>
        </Flex>

        <Flex alignItems={"center"} mt={1} gap={"20px"} fontSize={"15px"}>
          <Text color={"grey"} textDecoration={"line-through"}>
            MRP. {products.MRP}
          </Text>
          <Text color={"#ff6f61"}>({products.Discount}% OFF)</Text>
        </Flex>

        <Box
          textAlign={"center"}
          mt={1}
          cursor={"pointer"}
          bg={"#14244b"}
          color={"white"}
          p={2}
          borderRadius={1}
        >
          <Text onClick={() => handleCart(products._id)}>
            {/* {isLoading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              "Add To Cart"
            )} */}
            Add To Cart
          </Text>
        </Box>
      </Box>
    </>
  );
};
