import { Text, Box, Tag, Flex } from "@chakra-ui/react";

export default function StackListItem({ name, count }: { name: string, count: number }) {
    const text = count == 1 ? "container" : "containers";

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