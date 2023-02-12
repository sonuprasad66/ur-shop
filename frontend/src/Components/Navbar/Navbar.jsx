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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
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
import { SubNavbar } from "./SubNavbar";
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = true;
  const user = "Amol";
  const closeButton = () => {
    onclose();
  };
  return (
    <>
      <Box
        h={"70px"}
        bg={colorMode === "light" ? "#14244B" : "#14244B"}
        color={"white"}
      >
        <Flex
          h={"100%"}
          alignItems={"center"}
          justifyContent={"space-around"}
          w={["100%", "100%", "90%"]}
          m="auto"
        >
          <Flex alignItems={"center"} justifyContent={"space-around"} gap={5}>
            <Flex
              // pl={["2", "0", "0"]}
              visibility={["visible", "visible", "visible", "hidden"]}
              w="-webkit-fit-content"
              onClick={onOpen}
              cursor={"pointer"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {" "}
              <GiHamburgerMenu
                onClick={onOpen}
                display={["flex", "none", "none", "none"]}
                size={35}
              />
            </Flex>
            <Link to={"/"}>
              <Heading size={["md", "md", "md", "xl"]}>UR SHOP</Heading>
            </Link>
          </Flex>
          <Flex
            w={["0%", "30%", "40%", "50%"]}
            visibility={["hidden", "visible", "visible", "visible"]}
          >
            <InputGroup size="md">
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
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={["20px", "30px"]}
          >
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
                    <Text
                      display={["none", "flex", "flex", "flex"]}
                      visibility={["hidden", "visible", "visible", "visible"]}
                      fontSize={"18px"}
                    >
                      {user}
                    </Text>
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
                  <MenuGroup
                    title={user}
                    display={["flex", "none", "none", "none"]}
                    visibility={["visible", "hidden", "hidden", "hidden"]}
                  ></MenuGroup>
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
            <Link to="/wishlist">
              <FiHeart size={25} cursor="pointer" />
            </Link>
            <Link to="/cart">
              <HiOutlineShoppingCart size={25} cursor="pointer" />
            </Link>

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

      <Box
        display={["none", "none", "none", "flex"]}
        visibility={["hidden", "visible", "visible", "visible"]}
      >
        <SubNavbar />
      </Box>

      <Drawer size={"lg"} placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Link to={"/"}>
              <Heading onClick={onclose}>UR SHOP</Heading>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              gap={"10px"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              m={"auto"}
            >
              <Link to={"/"}>
                <Text onClick={onClose} fontWeight={"bold"} fontSize={"20px"}>
                  Men
                </Text>
              </Link>
              <Link to={"/"}>
                <Text fontWeight={"bold"} onClick={onClose} fontSize={"20px"}>
                  Women
                </Text>
              </Link>
              <Link to={"/"}>
                <Text onClick={onClose} fontWeight={"bold"} fontSize={"20px"}>
                  Electronics
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
