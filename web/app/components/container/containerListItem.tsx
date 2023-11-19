import { Text, Box, Tag, Flex } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { ContainerType } from "../../types/containerTypes";

export default function containerListItem({ name, state, stack }: ContainerType) {
  return (
    <Box borderRadius="lg" overflow="hidden">
      <Flex p={3} alignItems="center">
        <ContainerStatusBadge state={state} />
        <Text fontSize="md" fontWeight="bold" mr={3}>{name}</Text>
        {stack ? <Tag>{stack}</Tag> : null}
      </Flex>
    </Box>
  );
}