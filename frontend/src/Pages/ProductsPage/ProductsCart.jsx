import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ImStarEmpty } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getProductsDetails } from "../../Redux/Products/action";
import { useNavigate } from "react-router-dom";
import { addCartData } from "../../Redux/Cart/cart.action";

export const ProductsCart = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = (id) => {
    dispatch(getProductsDetails(id));
    navigate(`/products/${id}`);
  };

  const handleCart = (id) => {
    dispatch(addCartData({ product: id, qty: 1 }));
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
          <FiHeart fontSize={"20px"} cursor={"pointer"} />
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
          <Text onClick={() => handleCart(products._id)}>Add To Cart</Text>
        </Box>
      </Box>
    </>
  );
};
