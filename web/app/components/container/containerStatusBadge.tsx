import { Text, Box, Flex } from "@chakra-ui/react";
import { containerState } from "../../types/containerTypes";

export default function ContainerStatusBadge({ state, fontSize="sm" }: { state: containerState, fontSize?: string }) {
    const colorScheme = state === "running" ? "green.400" : "red.400";
    const text = state === "running" ? "Running" : "Stopped";
  
    return (
      <Flex alignItems="center" mr={state === "running" ? 3 : 4}>
        <Box w={2} h={2} borderRadius="full" bg={colorScheme} mr={1} />
        <Text fontSize={fontSize} color={colorScheme}>{text}</Text>
      </Flex>
    );
  }
  