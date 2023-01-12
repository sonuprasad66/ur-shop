// import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
// import React from "react";
// import {Search2Icon} from "@chakra-ui/icons"
// export const Navbar = () => {
//   return (
//     <>
//       <Box bgColor={"#14244B"} color="white" h="80px">
//         <Flex w="90%" m="auto" h="100%" alignItems={"center"} justifyContent={"space-between"}>
//           <Box>
//             <Heading>UR-SHOP</Heading>
//           </Box>
//           <Box>


import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useColorMode,
  Tooltip,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import { Link as BrowseLink, useNavigate } from "react-router-dom";
import {RiMoonClearLine} from "react-icons/ri";
import{MdOutlineWbSunny} from "react-icons/md"
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const token = false;

//   #14244B  gray.100
  return (
    <>
      <Box bg={colorMode === 'light' ? '#14244B' : '#14244B'} color={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} w="90%" m="auto">
          <HStack>
            <Heading textAlign={"center"} w={"100%"} pl="80px">
              <BrowseLink to={"/"}>BLOG</BrowseLink>
            </Heading>
          </HStack>
          <HStack spacing={8} alignItems={"center"} w="50%">
            <InputGroup size="md">
              <Input pr="4.5rem" type={"text"} placeholder="Search" />
              <InputRightElement width="4.5rem">
                <Search2Icon />
              </InputRightElement>
            </InputGroup>
          </HStack>
          {token ? (
            <HStack alignItems={"center"}>{/* <PostBlog /> */}</HStack>
          ) : (
            ""
          )}
          <Flex alignItems={"center"} gap={{ sm: "10px", lg: "30px" }}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    //     !token
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    //       : user.profile_pic
                  }
                />
              </MenuButton>
              {token ? (
                <MenuList>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>My Blog</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <BrowseLink to={"/signup"}>
                    <MenuItem>Sign Up</MenuItem>
                  </BrowseLink>
                  <BrowseLink to={"/login"}>
                    <MenuItem>Log In</MenuItem>
                  </BrowseLink>
                </MenuList>
              )}
            </Menu>
           <Box>
              
                {colorMode === "light" ? <RiMoonClearLine cursor={"pointer"} size={25} onClick={toggleColorMode} /> : <MdOutlineWbSunny cursor={"pointer"} size={25} onClick={toggleColorMode}/>}
                </Box>
           
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
