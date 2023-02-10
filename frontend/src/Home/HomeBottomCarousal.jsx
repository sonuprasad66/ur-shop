import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeBottomCarousal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    if (index == 0) {
      setIndex(index + 1);
    }
    if (index == 1) {
      setIndex(index - 1);
    }
  };
  console.log(index);

  return (
    <Box>
      <Carousel interval={3000} direction="right">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675947202_Mumbai.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675919530_Web_Mumbai_PremiumFruits.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default HomeBottomCarousal;
