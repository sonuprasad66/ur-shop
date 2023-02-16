import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlisCard from "../Components/Wishlist/WishlisCard";
import { deleteWishListData, getWishListData } from "../Redux/WaitList/action";
const token = localStorage.getItem("token");

const WishList = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.wishlist);

  useEffect(() => {
    dispatch(getWishListData());
  }, []);

  const deleteWishlist = async (id) => {
    dispatch(deleteWishListData(id));
  };

  return (
    <Box>
      <SimpleGrid columns={5} spacing={6} w="90%" m={"auto"} p={5}>
        {data.length > 0 ? (
          data?.map((el) => (
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
          ))
        ) : (
          <>
            <Flex
              w={"100%"}
              h={"80vh"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src="https://media.tenor.com/W6YUgyV84o0AAAAM/cry-crying.gif"
                alt="gif"
              />
              <Text>No Products Available</Text>
            </Flex>
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default WishList;
