import * as React from "react";
import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Text>Hello World</Text>
  </ChakraProvider>
);
