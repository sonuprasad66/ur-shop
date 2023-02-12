import { Box } from "@chakra-ui/react";
import React from "react";
import Electronics from "../Home/Electronics";
import Footer from "../Home/Footer";
import HomeBottomCarousal from "../Home/HomeBottomCarousal";
import HomeCard from "../Home/HomeCard";
import HomePet from "../Home/HomePet";
import HomeTopCarousal from "../Home/HomeTopCarousal";
import Kid from "../Home/Kids";
import Men from "../Home/Men";
import Trending from "../Home/Trending";
import Women from "../Home/Women";

const Home = () => {
  return (
    <Box>
      <HomeTopCarousal />
      <HomeBottomCarousal />
      <Trending />
      <Men />
      <Women />
      <HomeCard />
      <Kid />
      <Electronics/>
      <HomePet />
      <Footer />
    </Box>
  );
};

export default Home;
