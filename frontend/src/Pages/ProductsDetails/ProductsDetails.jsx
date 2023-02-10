import React, { useEffect } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../Redux/Products/action";

export const ProductsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.ProductsReducer.productsDetails);
  console.log(product);

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, []);

  return (
    <>
      <Flex w={"90%"} h={"90vh"} m={"50px auto"} border={"1px solid red"}>
        <Flex w={"50%"} h={"100%"} border={"1px solid blue"}>
          <Box
            w={"30%"}
            h={"100%"}
            border={"1px solid red"}
            p={2}
            display={"inline-block"}
          >
            <Box w={"90%"} h={"22%"} border={"1px solid red"} m={3}>
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image2}
                alt={product.Brand}
              />
            </Box>
            <Box w={"90%"} h={"22%"} border={"1px solid red"} m={3}>
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image3}
                alt={product.Brand}
              />
            </Box>
            <Box w={"90%"} h={"22%"} border={"1px solid red"} m={3}>
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image4}
                alt={product.Brand}
              />
            </Box>
            <Box w={"90%"} h={"22%"} border={"1px solid red"} m={3}>
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image5}
                alt={product.Brand}
              />
            </Box>
          </Box>
          <Box w={"70%"} h={"100%"} border={"1px solid red"} p={4}>
            <Image
              w={"100%"}
              h={"100%"}
              src={product.Image1}
              alt={product.Brand}
            />
          </Box>
        </Flex>

        <Box w={"50%"} h={"100%"} border={"1px solid blue"} p={5}>
          <Heading>{product.Product_Title}</Heading>

          <Flex gap={"20px"} alignItems={"center"}>
            <Text>{product.Brand}</Text>
            <Text>{product.Rating}</Text>
          </Flex>
          <Flex gap={"20px"} alignItems={"center"}>
            <Heading size={"md"}>₹{product.Price}</Heading>
            <Text>M.R.P: ₹{product.MRP}</Text>
          </Flex>
          <Flex gap={"20px"} alignItems={"center"}>
            <Text>
              You Save: <span>₹ {product.Discount}</span>
            </Text>
            <Text>Inclusive of all taxes</Text>
          </Flex>
          <Text>In Stock</Text>
          <Flex gap={"20px"} alignItems={"center"}>
            <Text>Inaugural Offer</Text>
            <Heading>Free Shopping</Heading>
          </Flex>
          <Button>Add To Cart</Button>
        </Box>
      </Flex>
    </>
  );
};
