import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/action";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);

  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);
  const [minDiscount, setMinDiscount] = useState([]);
  const [maxDiscount, setMaxDiscount] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);

  const uniqueBrandFun = (products) => {
    let arr = [];
    products &&
      products?.map((item) => {
        arr.push(item.Brand);
      });
    setUniqueBrand((pre) => [...new Set([...arr])]);
  };

  const uniqueCategoryFun = (products) => {
    let arr = [];
    products &&
      products?.map((item) => {
        arr.push(item.category);
      });
    setUniqueCategory((pre) => [...new Set([...arr])]);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    uniqueBrandFun(products);
    uniqueCategoryFun(products);
  }, [products]);

  const handleInput = () => {};

  const handleFilterBrand = (e) => {
    const newCategory = [...brand];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };

  const handleFilterCategory = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (brand || category) {
      let params = {};
      brand && (params.brand = brand);
      category && (params.category = category);
      setSearchParams(params);
    }
  }, [brand, category, setSearchParams]);

  return (
    <>
      <Box className="sidebar_container" onInput={handleInput}>
        <Box id="brand">
          <Heading size={"30px"}>Brand</Heading>
          <Box h={"120px"} overflow={"scroll"} className="sidebar_overflow">
            {uniqueBrand &&
              uniqueBrand.map((ele) => {
                return (
                  <Box key={ele}>
                    <input
                      type="checkbox"
                      value={ele}
                      onChange={handleFilterBrand}
                      checked={brand.includes(ele)}
                    />
                    <label style={{ marginLeft: "5px" }}>{ele}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box mt={3} id="category">
          <Heading size={"30px"}>Category</Heading>
          <Box h={"120px"} overflow={"scroll"} className="sidebar_overflow">
            {uniqueCategory &&
              uniqueCategory.map((ele) => {
                return (
                  <Box key={ele}>
                    <input
                      type="checkbox"
                      value={ele}
                      checked={category.includes(ele)}
                      onChange={handleFilterCategory}
                    />
                    <label style={{ marginLeft: "5px" }}>{ele}</label>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box id="price">
          <Heading size={"30px"}>Price</Heading>
          <Box>
            <input
              type="checkbox"
              value="0"
              onChange={(e) => {
                setMinPrice(e.target.value);
                setMaxPrice(500);
              }}
            />
            <label style={{ marginLeft: "5px" }}>₹0 - ₹500</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="551"
              onChange={(e) => {
                setMinPrice(e.target.value);
                setMaxPrice(1000);
              }}
            />
            <label style={{ marginLeft: "5px" }}>₹551 - ₹1000</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="1001"
              onChange={(e) => {
                setMinPrice(e.target.value);
                setMaxPrice(2500);
              }}
            />
            <label style={{ marginLeft: "5px" }}>₹1001 - ₹2500</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="2500"
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            />
            <label style={{ marginLeft: "5px" }}>Above ₹2500</label>
          </Box>
        </Box>
        <Box mt={3} id="discount">
          <Heading size={"30px"}>Discount</Heading>
          <Box>
            <input
              type="checkbox"
              value="0"
              onChange={(e) => {
                setMinDiscount(e.target.value);
                setMaxDiscount(20);
              }}
            />
            <label style={{ marginLeft: "5px" }}>0% - 20%</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="21"
              onChange={(e) => {
                setMinDiscount(e.target.value);
                setMaxDiscount(40);
              }}
            />
            <label style={{ marginLeft: "5px" }}>21% - 40%</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="41"
              onChange={(e) => {
                setMinDiscount(e.target.value);
                setMaxDiscount(60);
              }}
            />
            <label style={{ marginLeft: "5px" }}>41% - 60%</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="60"
              onChange={(e) => {
                setMinDiscount(e.target.value);
              }}
            />
            <label style={{ marginLeft: "5px" }}>Above 60%</label>
          </Box>
        </Box>
      </Box>
    </>
  );
};
