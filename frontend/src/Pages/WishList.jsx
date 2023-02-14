import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WishlisCard from "../Components/Wishlist/WishlisCard";
const token = localStorage.getItem("token");

const getData = async () => {
  let res = await axios.get("http://localhost:8080/wishlist", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

const WishList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);
  console.log(data);

  const deleteWishlist = async (id) => {
    console.log(id);
    await axios
      .delete(`http://localhost:8080/wishlist/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        getData().then((res) => setData(res.data));
      })
      .catch((er) => console.log(er));
  };

  return (
    <Box>
      <SimpleGrid columns={5} spacing={6} w="90%" m={"auto"} p={5}>
        {data?.map((el) => (
          <WishlisCard
            key={el._id}
            id={el._id}
            img={el.product.Image1}
            title={el.product.Product_Title}
            brand={el.product.Brand}
            price={el.product.Price}
            rating={el.product.Rating}
            mrp={el.product.MRP}
            category={el.product.category}
            deleteWishlist={deleteWishlist}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WishList;
