import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";

interface Problem {
  acceptance: string;
  description: string;
  difficulty: string;
  exampleIn: string;
  exampleOut: string;
  problemId: string;
  title: string;
}

type Props = {
  problem: Problem;
};

const QuestionListItem = ({ problem }: Props) => {
  const {
    acceptance,
    description,
    difficulty,
    exampleIn,
    exampleOut,
    problemId,
    title,
  } = problem;
  return (
    <Flex w={"full"} gap={"1rem"} alignItems={"center"}>
      <Box as="span">{problemId}</Box>
      <Box flexBasis={"60%"} as="span">
        {title}
      </Box>
      <Box as="span" color={"purple.500"}>
        <AiOutlineFileDone />
      </Box>
      <Box minW={'5rem'} as="span">{acceptance}</Box>
      <Box minW={'5rem'} color={"yellow.500"} as="span">
        {difficulty}
      </Box>
      <Box as="span">Frequency</Box>
    </Flex>
  );
};

export default QuestionListItem;
