import { Flex, Text, Box } from "@chakra-ui/react";
import { ContainerType } from "~/types/containerTypes";
import ContainerStatusBadge from "./containerStatusBadge";

export default function ContainerCard({ container, setDetails }: { container: ContainerType } & { setDetails: any }) {
    return (
        <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
            my={2}
            onClick={ () => setDetails({ type: "container", item: container }) }
            _hover={{ cursor: "pointer" }}
        >
            <Text fontSize="md" fontWeight="bold" mr={3} mb={1}>
                {container.name}
            </Text>
            <Text fontSize="sm" color="gray.500" mr={3} mb={3}>
                {container.image}
            </Text>
            <ContainerStatusBadge state={container.state} />
        </Box>
    );
}