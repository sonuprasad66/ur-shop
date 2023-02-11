import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import Cart from "./cart/Cart";

function App() {
  return (
    <>
      <Box className="font-face-pt">
        <Navbar />
        <AllRoutes />
        {/* <Cart /> */}
      </Box>
    </>
  );
}

export default App;
