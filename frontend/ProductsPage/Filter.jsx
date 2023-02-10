import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React from "react";

export const Filter = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Button bg={"#14244b"} color={"white"}>
            Reset All Filters
          </Button>
        </Box>
        <Box>
          <Select placeholder="Sort By Price">
            <option value="LTH">LOW TO HIGH</option>
            <option value="HTL">HIGH TO LOW</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Sort By Discount">
            <option value="LTH">LOW TO HIGH</option>
            <option value="HTL">HIGH TO LOW</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Sort By Rating">
            <option value="LTH">LOW TO HIGH</option>
            <option value="HTL">HIGH TO LOW</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
};
