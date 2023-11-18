import { Text, Box, Tag, Flex } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { ContainerCardType } from "../../types/containerTypes";

export default function ContainerCard({ name, state, stack }: ContainerCardType) {
    return (
      <Box
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex p={3} alignItems="center">
          <ContainerStatusBadge state={state} />
          <Text fontSize="md" fontWeight="bold" mr={3}>{name}</Text> 
          <Tag>{stack}</Tag>
        </Flex>
      </Box>
    );
  }