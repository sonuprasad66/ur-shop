import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/Cart/cart.action";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";

const Cart = () => {
  const data = useSelector((store) => store.cart.data);
  const dispatch = useDispatch();

  let total = data.reduce((acc, el) => acc + el.qty * el.product.Price, 0);

  let totalMrp = data.reduce((acc, el) => acc + el.qty * el.product.MRP, 0);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  if (data.length === 0) {
    return <Heading>Data loading</Heading>;
  }

  return (
    <Box w={"90%"} m="auto">
      <Box display={["block", "flex"]} justify={"space-between"}>
        <Box>
          {data?.map((el) => (
            <CartCard
              key={el._id}
              id={el._id}
              img={el.product.Image1}
              title={el.product.Product_Title}
              brand={el.product.Brand}
              price={el.product.Price}
              rating={el.product.Rating}
              mrp={el.product.MRP}
              category={el.product.category}
              qty={el.qty}
            />
          ))}
        </Box>
        <Box>
          {" "}
          <CartDetails total={total} totalMrp={totalMrp} item={data.length} />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
