import { Text, Box, Tag, Flex } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { ContainerCardProps } from "../../types/containerTypes";

export default function ContainerCard({ name, status, stack }: ContainerCardProps) {
    return (
      <Box
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex p={3} alignItems="center">
          <ContainerStatusBadge status={status} />
          <Text fontSize="md" fontWeight="bold" mr={3}>{name}</Text> 
          <Tag>{stack}</Tag>
        </Flex>
      </Box>
    );
  }