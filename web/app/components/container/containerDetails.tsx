import { Heading, Flex, Tag, Box, Badge } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { MaybeContainer } from "~/types/containerTypes";

export default function ContainerDetails({container}: MaybeContainer) {
    if (container && container.name) {
        return (
            <Box>
                <Flex mt={3}>
                    <Heading size="md" mx={4}>
                        {container.name}
                    </Heading>
                    <Tag>{container.stack}</Tag>
                </Flex>
                <Flex mt={3} mx={4}>
                    <ContainerStatusBadge status={container.status} fontSize="md" />
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