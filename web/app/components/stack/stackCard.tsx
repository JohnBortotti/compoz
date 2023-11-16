import { Text, Box, Tag, Flex } from "@chakra-ui/react";
import { StackCardProp } from "../../types/containerTypes";

export default function StackCard({ name, count }: StackCardProp) {
    const text = count > 1 ? "containers" : "container";

    return (
      <Box
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex p={3} alignItems="center">
          <Text fontSize="md" fontWeight="bold" mr={3}>{name}</Text> 
          <Tag>{count} {text}</Tag>
        </Flex>
      </Box>
    );
}