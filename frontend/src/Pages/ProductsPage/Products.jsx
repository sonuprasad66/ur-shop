import { Box, Button, Flex, Select, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/action";
import { Filter } from "./Filter";
import { Pagination } from "./Pagination";
import { ProductsCart } from "./ProductsCart";
import { Sidebar } from "./Sidebar";

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
          <Filter />
        </Box>
        <Flex w={"100%"} border={"1px solid red"} gap={"20px"} mt={4}>
          <Box w={"15%"} h={"500px"} p={4}>
            <Sidebar />
          </Box>
          <Box w={"85%"} border={"1px solid red"} p={4}>
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
        <Box w={"100%"} p={5} border={"1px solid red"} mt={5}>
          <Pagination />
        </Box>
      </Box>
    </>
  );
};
