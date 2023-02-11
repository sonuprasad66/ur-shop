import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#14244B">
      <SimpleGrid
        columns={[1, 2, 3]}
        fontSize="14px"
        p={5}
        w="80%"
        m="auto"
        py={"5%"}
      >
        <Box color="#fff" lineHeight="25px" >
          <Text lineHeight="30px" mb={2}>
            <b>MOST POPULAR CATEGORIES</b>{" "}
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>Staples</Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>Beverages</Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Personal Care
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>Home Care</Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Fruits and Vegetables
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>Baby Care </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Snacks & Branded Foods{" "}
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Dairy & Bakery{" "}
          </Text>
        </Box>
        <Box  lineHeight="25px" color={"#fff"}>
          <Text lineHeight="30px" mb={2}>
            <b>CUSTOMER SERVICES</b>{" "}
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>About Us</Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>FAQ</Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Terms and conditions
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Privacy policy
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            E-waste Policy
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Cancellation and return policy{" "}
          </Text>
          <Text _hover={{ color: "#ccdddd", cursor: "pointer" }}>
            Shipping & Delivery Policy{" "}
          </Text>
        </Box>
        <Box color={"#fff"}>
          <Text lineHeight="30px" mb={2}>
            <b>CONTACT US</b>
          </Text>
          <Text my={3}>
            WhatsApp Us : <span style={{ color: "#14244B" }}>1234567890</span>{" "}
          </Text>
          <Text>
            Call Us : <span style={{ color: "#14244B" }}>1234567890</span>{" "}
          </Text>
          <Text mb={3}>8:00 AM to 8:00 PM, 365 days</Text>
          <Text>
            Please note that you are accessing the BETA Version of{" "}
            <span style={{ color: "#ccdddd" }}> www.urshop.com</span>
          </Text>
          <Text mt={3}>
            Should you encounter any bugs, glitches, lack of functionality,
            delayed deliveries, billing errors or other problems on the beta
            website, please email us on{" "}
            <span style={{ color: "#ccdddd" }}> cs@urshop.com</span>
          </Text>
          <Text lineHeight="30px" mb={2} mt={5}>
            <b> DOWNLOAD APP</b>
          </Text>
          <HStack spacing={5}>
            <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" />
            <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" />
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
