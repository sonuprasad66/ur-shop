import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./Redux/Auth/action";
import { Footer } from "./Home/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
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
