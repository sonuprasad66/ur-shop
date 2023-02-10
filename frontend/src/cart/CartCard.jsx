import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CartCard = () => {
  return (
    <Box w={"90%"} m="auto">
      <Grid
        templateColumns="repeat(7, 1fr)"
        gap={5}
        padding={5}
        borderBottom={"1px solid #878787"}
      >
        <GridItem colSpan={[6, 1]}>
          <Center>
            {" "}
            <Box>
              <Center>
                <Image
                  maxH={"100px"}
                  w={["100px", "auto"]}
                  src="https://rukminim1.flixcart.com/image/224/224/keekmfk0/data-cable/usb-type-c-cable/h/y/e/boat-type-c-a320-original-imafv2qhqzks4hbj.jpeg?q=90"
                />
              </Center>

              <HStack mt={8}>
                <button
                  style={{
                    borderRadius: "50%",
                    border: "1px solid black",
                    hight: "20px",
                    width: "25px",
                  }}
                >
                  -
                </button>
                <Box border={"1px solid #212121"} p={"0px 15px"}>
                  5
                </Box>
                <button
                  style={{
                    borderRadius: "50%",
                    border: "1px solid black",
                    hight: "20px",
                    width: "25px",
                  }}
                >
                  +
                </button>
              </HStack>
            </Box>
          </Center>
        </GridItem>
        <GridItem colSpan={[7, 4]}>
          <Text color="#212121">
            Portronics Lightning Cable 3 A 1 m SILICO-L 20W PD Type C{" "}
          </Text>
          <Text fontSize={"14px"} color="#878787">
            Portronics Lightning Cable 3 A 1 m SILICO-L 20W PD Type C{" "}
          </Text>
          <Text fontSize={"14px"} color="#878787" my={2}>
            Seller : MPDSLERetail
          </Text>

          <HStack my={5}>
            <Text fontSize={"14px"} color="#878787" as={"s"}>
              ₹499
            </Text>
            <Text fontWeight={"bold"}>₹199</Text>
            <Text color={"#388F3C"}>60% Off</Text>
            <Text color={"#388F3C"}>3 offers applied</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontWeight={"600"} _hover={{ color: "#2874f0" }}>
              {" "}
              SAVE FOR LATER
            </Text>
            <Text fontWeight={"600"} _hover={{ color: "#2874f0" }}>
              REMOVE
            </Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={[4, 2]}>
          <Text color={"#212121"} fontSize="14px">
            {" "}
            Delivery by 11 PM, Tomorrow |
          </Text>
          <Text color={"#388F3C"}>
            {" "}
            Free
            <span
              style={{
                color: "#212121",
                padding: "5px",
                textDecoration: "line-through",
              }}
            >
              ₹70
            </span>
          </Text>
          <Text color={"#212121"} fontSize="14px" my={3}>
            Delivery by Wed Feb 22 |
            <span
              style={{
                color: "#388F3C",
                padding: "5px",
              }}
            >
              Free
            </span>
            <span
              style={{
                color: "#212121",
                padding: "5px",
                textDecoration: "line-through",
              }}
            >
              ₹40
            </span>
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CartCard;
