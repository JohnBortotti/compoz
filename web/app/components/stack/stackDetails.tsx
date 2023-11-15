import { Heading, Flex, Tag, Box, Badge } from "@chakra-ui/react";
import ContainerStatusBadge from "./containerStatusBadge";
import { ContainerCardProps } from "~/types/containerTypes";

export default function StackDetails({
    name,
    status,
    stack,
}: ContainerCardProps) {
    return (
        <Box>
            <Flex mt={3}>
                <Heading size="md" mx={4}>
                    {name}
                </Heading>
                <Tag>{stack}</Tag>
            </Flex>
            <Flex mt={3} mx={4}>
                <ContainerStatusBadge status={status} fontSize="md" />
            </Flex>
        </Box>
    );
}