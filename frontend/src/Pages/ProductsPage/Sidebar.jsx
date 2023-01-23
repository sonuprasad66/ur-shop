import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/action";

export const Sidebar = () => {
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const uniqueBrand = (products) => {
    console.log("unique brand");
    let arr = [];
    products &&
      products?.map((item) => {
        arr.push(item.Brand);
      });
    setBrand((pre) => [...new Set([...arr])]);
  };

  const uniqueCategory = (products) => {
    let arr = [];
    products &&
      products?.map((item) => {
        arr.push(item.category);
      });
    setCategory((pre) => [...new Set([...arr])]);
  };

  useEffect(() => {
    uniqueBrand(products);
    uniqueCategory(products);
  }, [products]);

  return (
    <>
      <Box className="sidebar_container">
        <Box>
          <Heading size={"30px"}>Brand</Heading>
          <Box h={"120px"} overflow={"scroll"} className="sidebar_overflow">
            {brand &&
              brand.map((ele) => {
                return (
                  <Box key={ele}>
                    <input type="checkbox" value={ele} />
                    <label>{ele}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box mt={3}>
          <Heading size={"30px"}>Category</Heading>
          <Box h={"120px"} overflow={"scroll"}>
            {category &&
              category.map((ele) => {
                return (
                  <Box key={ele}>
                    <input type="checkbox" value={ele} />
                    <label>{ele}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box>
          <Heading size={"30px"}>Price</Heading>
          <Box>
            <input type="checkbox" />
            <label>₹0 - ₹500</label>
          </Box>
          <Box>
            <input type="checkbox" />
            <label>₹551 - ₹1000</label>
          </Box>
          <Box>
            <input type="checkbox" />
            <label>₹1001 - ₹2500</label>
          </Box>
          <Box>
            <input type="checkbox" />
            <label>Above ₹2500</label>
          </Box>
        </Box>
        <Box>
          <Heading size={"30px"}>Discount</Heading>
          <Box>
            <input type="checkbox" />
            <label>0% - 20%</label>
          </Box>
          <Box>
            <input type="checkbox" />
            <label>21% - 40%</label>
          </Box>
          <Box>
            <input type="checkbox" />
            <label>41% - 60%</label>
          </Box>
          <Box>
            <input type="checkbox" />
            <label>Above 60%</label>
          </Box>
        </Box>
      </Box>
    </>
  );
};
