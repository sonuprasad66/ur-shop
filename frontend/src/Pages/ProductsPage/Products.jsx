import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/action";
import { ProductsCart } from "./ProductsCart";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Box p={"20px"}>
        <Box w={"100%"} p={5} border={"1px solid red"}>
          top
        </Box>
        <Flex w={"100%"} border={"1px solid red"} gap={"20px"} mt={4}>
          <Box w={"20%"} border={"1px solid red"} h={"500px"}>
            Sidebar
          </Box>
          <Box w={"80%"} border={"1px solid red"} p={4}>
            {products.length > 0 ? (
              <>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
                  {products &&
                    products.map((item) => {
                      return <ProductsCart key={item._id} products={item} />;
                    })}
                </SimpleGrid>
              </>
            ) : (
              <>
                <div>
                  <div>
                    <img
                      src="https://media.tenor.com/W6YUgyV84o0AAAAM/cry-crying.gif"
                      alt="gif"
                    />
                    <h2>No Products Available</h2>
                  </div>
                </div>
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
