import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Products.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { getFilterProducts, getProducts } from "../../Redux/Products/action";
import { Filter } from "./Filter";
import { Pagination } from "./Pagination";
import { ProductsCart } from "./ProductsCart";
import { Sidebar } from "./Sidebar";

export const Products = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSort, setOpenSort] = useState(false);

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

  const handleSidebar = () => {
    setOpenMenu(true);
  };
  const handleOpenSort = () => {
    setOpenSort(true);
  };

  return (
    <>
      <Box p={"20px"}>
        <Box
          w={"100%"}
          className={openSort ? "select_sort active" : "select_sort"}
        >
          <Text onClick={() => setOpenSort(false)} className="sort_cross">
            X
          </Text>
          <Filter />
        </Box>
        <Box className={"open_mobile"}>
          <Button bg={"#14244b"} color={"white"} onClick={handleSidebar}>
            Open Filter
          </Button>
          <Button bg={"#14244b"} color={"white"} onClick={handleOpenSort}>
            Open Sort
          </Button>
        </Box>

        <Flex w={"100%"} gap={"20px"} mt={4}>
          <Box
            w={["100%", "35%", "15%", "15%"]}
            h={"500px"}
            p={4}
            className={openMenu ? "left_side_bar active" : "left_side_bar"}
          >
            <Text onClick={() => setOpenMenu(false)} className="sidebar_cross">
              X
            </Text>
            <Sidebar />
          </Box>
          <Box w={["100%", "100%", "100%", "85%"]} p={4}>
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
