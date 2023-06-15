import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import QuestionListing from "./components/QuestionListing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <QuestionListing />
  </ChakraProvider>
);
