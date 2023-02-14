import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TeamUser } from "./TeamUser";

const data = [
  {
    name: "Sonu Prasad",
    type: "Problem Solver",
    url: "https://avatars.githubusercontent.com/u/101389401?v=4",
    github: "https://github.com/sonuprasad66",
    linkedin: "https://www.linkedin.com/in/sonuprasad66",
    portfolio: "https://sonuprasad66.github.io/",
  },

  {
    name: "Sonu Prasad",
    type: "Problem Solver",
    url: "https://avatars.githubusercontent.com/u/101389401?v=4",
    github: "https://github.com/sonuprasad66",
    linkedin: "https://www.linkedin.com/in/sonuprasad66",
    portfolio: "https://sonuprasad66.github.io/",
  },

  {
    name: "Sonu Prasad",
    type: "Problem Solver",
    url: "https://avatars.githubusercontent.com/u/101389401?v=4",
    github: "https://github.com/sonuprasad66",
    linkedin: "https://www.linkedin.com/in/sonuprasad66",
    portfolio: "https://sonuprasad66.github.io/",
  },
];

export const Team = () => {
  return (
    <VStack p={50}>
      <Text fontWeight={"semibold"} fontSize={{ base: "18px", md: "2xl" }}>
        Our Creative Team
      </Text>

      <Stack direction={{ base: "column", md: "row" }} spacing={5}>
        {data.map((el) => (
          <TeamUser data={el} />
        ))}
      </Stack>
    </VStack>
  );
};
