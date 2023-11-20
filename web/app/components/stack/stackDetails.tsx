import { Heading, Flex, Tag, Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import { MaybeStack } from "~/types/containerTypes";
import ComposeEditor from "./composeEditor";
import ContainerCard from "../container/containerCard";
import StackButtons from "./stackButtons";
import { useEffect, useState } from "react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export default function StackDetails({ stack, setDetails }: MaybeStack & { setDetails: any }) {
    const [savedStatus, setSavedStatus] = useState<boolean>(true);
    const [fileContent, setFileContent] = useState<string>("");

    useEffect(() => {
        if (stack) {
            setFileContent(stack.content);
        }
    }, [stack]);

    if (stack && stack.name) {
        return (
            <Box>
                <Flex my={3}>
                    <Text fontSize="2xl" fontWeight="bold" mx={4}>
                        {stack.name}
                    </Text>
                    <Tag>{stack.containers.length} {stack.containers.length > 1 ? "containers" : "container"}</Tag>
                </Flex>
                <Divider></Divider>
                <Box mx={4} mt={5} >
                    <StackButtons saved={savedStatus} />
                </Box>
                <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full" h="full">
                    <GridItem colSpan={1} bg="white" w="full" h="full" p={3}>
                        <Box mx={4} mt={4}>
                            {
                                savedStatus ?
                                    <Text fontSize="xl" fontWeight="bold" mb={4}>Compose</Text>
                                    :
                                    <Text fontSize="xl" fontWeight="bold" mb={4}>Compose <WarningTwoIcon color="yellow.500" /></Text>
                            }
                            <ComposeEditor value={fileContent} setSavedStatus={setSavedStatus} setFileContent={setFileContent} />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} bg="white" w="full" h="full" p={3}>
                        <Box mx={4} mt={4}>
                            <Text fontSize="xl" fontWeight="bold" mb={4}>Containers</Text>
                            {
                                stack.containers.length === 0 ?
                                    <Text color="gray.400" fontWeight="500">No running containers in this stack</Text>
                                    :
                                    stack.containers.map((container) =>
                                        <ContainerCard key={container.id} container={container} setDetails={setDetails} />
                                    )
                            }
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        );
    } else {
        return (
            <Box>
                <Flex mt={3}>
                    <Heading size="md" mx={4} color="gray.300" fontWeight="400">
                        No stack selected
                    </Heading>
                </Flex>
            </Box>
        );
    }
}