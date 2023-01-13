import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import { CheckoutPage } from "./Components/CheckoutPage";

function App() {
  return (
    <>
      <Box className="font-face-pt">
        <Navbar />
        {/* <AllRoutes /> */}
        <CheckoutPage />
      </Box>
    </>
  );
}

export default App;
