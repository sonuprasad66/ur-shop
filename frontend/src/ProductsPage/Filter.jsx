import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterProducts, getProducts } from "../Redux/Products/action";

export const Filter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);
  const filterProducts = useSelector(
    (state) => state.ProductsReducer.filterProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(getFilterProducts());
  }, []);

  const handleReset = () => {};

  const handlePrice = (e) => {
    // const filterPrice = filterProducts.sort((a, b) => {
    //   if (e === "LTH") {
    //     if (a.Price > b.Price) return +1;
    //     return -1;
    //   } else if (e === "HTL") {
    //     if (a.Price < b.Price) return +1;
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // });
    // console.log(filterPrice);
  };

  const handleDiscount = (e) => {
    console.log(e);
  };

  const handleRating = (e) => {
    console.log(e);
  };

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Button bg={"#14244b"} color={"white"} onClick={handleReset}>
            Reset All Filters
          </Button>
        </Box>
        <Box>
          <Select
            placeholder="Sort By Price"
            onChange={(e) => handlePrice(e.target.value)}
          >
            <option value="LTH">LOW TO HIGH</option>
            <option value="HTL">HIGH TO LOW</option>
          </Select>
        </Box>
        <Box>
          <Select
            placeholder="Sort By Discount"
            onChange={(e) => handleDiscount(e.target.value)}
          >
            <option value="LTH">LOW TO HIGH</option>
            <option value="HTL">HIGH TO LOW</option>
          </Select>
        </Box>
        <Box>
          <Select
            placeholder="Sort By Rating"
            onChange={(e) => handleRating(e.target.value)}
          >
            <option value="LTH">LOW TO HIGH</option>
            <option value="HTL">HIGH TO LOW</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
};
