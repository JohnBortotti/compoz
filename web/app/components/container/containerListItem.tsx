import { Text, Box, Tag, Flex } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { containerState } from "../../types/containerTypes";


export default function ContainerListItem({ name, state, stack }: { name: string, state: containerState, stack: string }) {
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