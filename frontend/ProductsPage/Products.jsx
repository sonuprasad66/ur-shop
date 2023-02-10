import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD:frontend/ProductsPage/Products.jsx
import { getProducts } from "../src/Redux/Products/action";
=======
import { useLocation, useSearchParams } from "react-router-dom";
import { getFilterProducts, getProducts } from "../../Redux/Products/action";
>>>>>>> 57ec1d0a4f5922bb3df0dce35541ee2eb8ee93ab:frontend/src/Pages/ProductsPage/Products.jsx
import { Filter } from "./Filter";
import { Pagination } from "./Pagination";
import { ProductsCart } from "./ProductsCart";
import { Sidebar } from "./Sidebar";

export const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const products = useSelector((state) => state.ProductsReducer.products);
  const filterProducts = useSelector(
    (state) => state.ProductsReducer.filterProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (location || data.length === 0) {
      let getProductsParams = {
        params: {
          brand: searchParams.getAll("brand"),
          category: searchParams.getAll("category"),
        },
      };
      // console.log(getProductsParams);
      dispatch(getFilterProducts(getProductsParams));
    }
  }, [location.search]);

  return (
    <>
      <Box p={"20px"}>
        <Box w={"100%"}>
          <Filter />
        </Box>
        <Flex w={"100%"} gap={"20px"} mt={4}>
          <Box w={"15%"} h={"500px"} p={4}>
            <Sidebar />
          </Box>
          <Box w={"85%"} p={4}>
            {filterProducts.length > 0 ? (
              <>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
                  {filterProducts &&
                    filterProducts.map((item) => {
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
