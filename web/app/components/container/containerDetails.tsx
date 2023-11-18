import { Heading, Flex, Tag, Box, Badge, Button } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { MaybeContainer, setDetailsInterface } from "~/types/containerTypes";

export default function ContainerDetails(
    { container, setDetails }: MaybeContainer & setDetailsInterface
) {
    if (container && container.name) {
        return (
            <Box>
                <Flex mt={3}>
                    <Heading size="md" mx={4}>
                        {container.name}
                    </Heading>
                    <Tag
                        onClick={() => {
                            // setDetails({ type: "stack", item: container.stack });
                        }}
                        _hover={{ bg: "gray.200", cursor: "pointer" }}>
                        {container.stack}
                    </Tag>
                </Flex>
                <Flex mt={3} mx={4}>
                    <ContainerStatusBadge state={container.state} fontSize="md" />
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box>
                <Flex mt={3}>
                    <Heading size="md" mx={4} color="gray.300">
                        No container selected
                    </Heading>
                </Flex>
            </Box>
        );
    }
}