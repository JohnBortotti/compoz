import { Heading, Flex, Tag, Box, Badge, Button } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { MaybeContainer, setDetailsInterface } from "~/types/containerTypes";
import { getStack } from "~/utils/api";

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
                    { container.stack ? <Tag
                        onClick={async () => {
                            const stack = await getStack(container.stack)
                            if (stack != null) {
                                setDetails({ type: "stack", item: stack });
                            }
                        }}
                        _hover={{ bg: "gray.200", cursor: "pointer" }}>
                        {container.stack}
                    </Tag>: null }
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
                    <Heading size="md" mx={4} color="gray.300" fontWeight="400">
                        No container selected
                    </Heading>
                </Flex>
            </Box>
        );
    }
}