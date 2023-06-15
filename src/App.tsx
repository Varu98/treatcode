import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import SolveQuestion from "./components/SolveQuestion";
import QuestionListiong from "./components/QuestionListing"

export const App = () => (
  <ChakraProvider theme={theme}>
    <SolveQuestion />
    <QuestionListing />
  </ChakraProvider>
);
