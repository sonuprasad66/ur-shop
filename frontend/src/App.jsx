import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
