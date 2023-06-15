import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import QuestionListItem from "./QuestionListItem";

const QuestionListing = () => {
  const questionsArr = new Array(10).fill(<QuestionListItem />);
  const [questions, setQuestions] = useState(questionsArr);
  return (
    <VStack
    h={'100vh'}
    marginInline="auto"
      justifyContent={"center"}
      alignItems={"center"}
      gap="1rem"
      maxW={"60vw"}
    >
      {questions.map((question) => question)}
    </VStack>
  );
};

export default QuestionListing;
