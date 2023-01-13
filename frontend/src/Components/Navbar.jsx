import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  MenuGroup,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { RiMoonClearLine } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const token = true;
  const user = "Amol";
  return (
    <>
      <Box bg={colorMode === "light" ? "#14244B" : "#14244B"} color={"white"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-around"}
          w={["100%", "100%", "90%"]}
          m="auto"
        >
          <Flex alignItems={"center"} justifyContent={"space-around"} gap={2}>
            <Flex
              pl={["2", "0", "0"]}
              visibility={["visible", "visible", "visible", "hidden"]}
            >
              {" "}
              <GiHamburgerMenu size={35} />
            </Flex>
            <Heading size={["md", "md", "md", "xl"]} >
              <Link to={"/"}>UR SHOP</Link>
            </Heading>
          </Flex>
          <Flex w={["30%", "30%", "40%", "50%"]} visibility={["hidden", "visible", "visible", "visible"]}>
            <InputGroup size="md" >
              <Input
                border={"2px solid white"}
                pr="4.5rem"
                type={"text"}
                placeholder="Search"
              />
              <InputRightElement width="4.5rem">
                <Search2Icon cursor={"pointer"} />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex alignItems={"center"} gap={{ sm: "20px", lg: "30px" }}>
            <Menu>
              {token ? (
                <MenuButton>
                  {" "}
                  <Flex alignItems={"center"} color="white" gap={2}>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                    />
                    <Text fontSize={"18px"}>{user}</Text>
                  </Flex>
                </MenuButton>
              ) : (
                <Link to={"/login"}>
                  <Flex alignItems={"center"} color="white">
                    <HiOutlineUser size={25} />
                    <Text fontSize={"18px"}>Login</Text>
                  </Flex>
                </Link>
              )}

              {token && (
                <MenuList color={colorMode === "light" ? "black" : "white"}>
            
                  <MenuItem>
                    <HiOutlineUser size={25} /> <Text ml={2}> My Account</Text>
                  </MenuItem>
                  <MenuItem>
                    <BsHandbag size={25} />
                    <Text ml={2}> My Orders</Text>
                  </MenuItem>

                  <MenuItem>
                    <AiOutlinePoweroff size={25} />

                    <Text ml={2}>Log Out</Text>
                  </MenuItem>
                 
                </MenuList>
               
              )}
            </Menu>
            <FiHeart size={25} cursor="pointer" />
            <HiOutlineShoppingCart size={25} cursor="pointer" />
            <Box>
              {colorMode === "light" ? (
                <RiMoonClearLine
                  cursor={"pointer"}
                  size={25}
                  onClick={toggleColorMode}
                />
              ) : (
                <MdOutlineWbSunny
                  cursor={"pointer"}
                  size={25}
                  onClick={toggleColorMode}
                />
              )}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
