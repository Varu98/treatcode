import * as React from "react";
import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import SolveQuestion from "./components/SolveQuestion";

export const App = () => (
  <ChakraProvider theme={theme}>
    <SolveQuestion />
  </ChakraProvider>
);
