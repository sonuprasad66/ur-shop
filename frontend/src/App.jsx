import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Box className="font-face-pt">
        <Navbar />
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
