import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Electronics from "../Home/Electronics";
import HomeBottomCarousal from "../Home/HomeBottomCarousal";
import HomeCard from "../Home/HomeCard";
import HomePet from "../Home/HomePet";
import HomeTopCarousal from "../Home/HomeTopCarousal";
import Kid from "../Home/Kids";
import Men from "../Home/Men";
import Trending from "../Home/Trending";
import Women from "../Home/Women";
import { getProfile } from "../Redux/Auth/action";
import { getCartData } from "../Redux/Cart/cart.action";
import { getWishListData } from "../Redux/WaitList/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishListData());
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <Box>
      <HomeTopCarousal />
      <HomeBottomCarousal />
      <Trending />
      <Men />
      <Women />
      <HomeCard />
      <Kid />
      <Electronics />
      <HomePet />
    </Box>
  );
};

export default Home;
