import { Heading, Flex, Tag, Box, Badge } from "@chakra-ui/react";
import { MaybeStack } from "~/types/containerTypes";

export default function StackDetails({ stack }: MaybeStack) {
    if (stack && stack.name) {
        return (
            <Box>
                <Flex mt={3}>
                    <Heading size="md" mx={4}>
                        {stack.name}
                    </Heading>
                    <Tag>{stack.count} {stack.count > 1 ? "containers" : "container" }</Tag>
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box>
                <Flex mt={3}>
                    <Heading size="md" mx={4} color="gray.300">
                        No stack selected
                    </Heading>
                </Flex>
            </Box>
        );
    }
}