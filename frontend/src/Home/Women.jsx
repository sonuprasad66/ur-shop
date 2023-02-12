import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductsCart } from "../Pages/ProductsPage/ProductsCart";

const getData = async () => {
  let res = await axios.get("http://localhost:8080/getAllProductsWomens");
  return res;
};

const Women = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    getData().then((res) => setData(res.data.filter((el, i) => i < 5)));
  }, []);

  return (
    <Box>
      {" "}
      <Text m={"1.5%"} fontSize={"20px"} mb="0" fontWeight="bold">
        {" "}
        Womens - Top Picks
      </Text>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing="30px"  p={5}>
        {data?.map((item) => (
          <ProductsCart key={item._id} products={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Women;
