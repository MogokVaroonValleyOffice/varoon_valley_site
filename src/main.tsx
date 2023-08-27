import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./styles/index.css";
import router from "./router/router";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
