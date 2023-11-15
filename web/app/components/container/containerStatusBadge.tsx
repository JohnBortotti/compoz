import { Text, Box, Flex } from "@chakra-ui/react";
import { containerStatus } from "../../types/containerTypes";

export default function ContainerStatusBadge({ status, fontSize="sm" }: { status: containerStatus, fontSize?: string }) {
    const colorScheme = status === "running" ? "green.400" : "red.400";
    const text = status === "running" ? "Running" : "Stopped";
  
    return (
      <Flex alignItems="center" mr={status === "running" ? 3 : 4}>
        <Box w={2} h={2} borderRadius="full" bg={colorScheme} mr={1} />
        <Text fontSize={fontSize} color={colorScheme}>{text}</Text>
      </Flex>
    );
  }
  