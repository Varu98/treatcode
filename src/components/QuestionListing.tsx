import { VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionListItem from "./QuestionListItem";

const QuestionListing = () => {
  // const questionsArr = new Array(10).fill(<QuestionListItem />);
  // const [questions, setQuestions] = useState(questionsArr);
  const [problems, setProblems] = useState<[]>([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const { data } = await axios.get(
        "https://treatcode-serves.onrender.com/problems"
      );
      console.log(data);
      setProblems(data);
    };
    fetchProblems();
  }, []);

  return (
    <VStack marginInline="auto" flexGrow={'100%'} alignItems={"start"} gap="1rem" maxW={"60vw"}>
      {problems.map((problem) => (
        <QuestionListItem problem={problem} />
      ))}
    </VStack>
  );
};

export default QuestionListing;
