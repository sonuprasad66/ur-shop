import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      {/* <Provider store={store}> */}
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
      {/* </Provider> */}
    </ChakraProvider>
  </BrowserRouter>
);
