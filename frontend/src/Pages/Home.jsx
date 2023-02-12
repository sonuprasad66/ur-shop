import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Home/Footer";
import HomeBottomCarousal from "../Home/HomeBottomCarousal";
import HomeCard from "../Home/HomeCard";
import HomePet from "../Home/HomePet";
import HomeTopCarousal from "../Home/HomeTopCarousal";
import Trending from "../Home/Trending";

const Home = () => {
  return (
    <Box>
      <HomeTopCarousal />
      <HomeBottomCarousal />
      <Trending />
      <HomeCard />
      <HomePet />
      <Footer />
    </Box>
  );
};

export default Home;
