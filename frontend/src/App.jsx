import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Home/Footer";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <AllRoutes />
        <Footer />
      </Box>
    </>
  );
}

export default App;
