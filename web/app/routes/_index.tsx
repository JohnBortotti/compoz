import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { ChakraProvider, Grid, GridItem, Box, Tag, Flex, Heading, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ContainerDetails from "~/components/container/containerDetails";
import ContainersList from "~/components/container/containersList";
import StacksList from "~/components/stack/stacksList";
import { useState } from "react";
import { MaybeContainer, MaybeStack, ShowingType } from "~/types/containerTypes";
import StackDetails from "~/components/stack/stackDetails";

export default function Index() {
  
  const [showType, setShowType] = useState<ShowingType>("containers");
  const [selectedContainer, setSelectedContainer] = useState<MaybeContainer>({container: null});
  const [selectedStack, setSelectedStack] = useState<MaybeStack>({stack: null});

  return (
    <ChakraProvider>
      <Box p={2} bg="gray.100" h="full" w="full">
        <Flex w="full" p={4} color="white" justifyContent="space-between" alignItems="center" bg="white" borderRadius="md">
          <Heading size="lg" color="black" w="full">CompoZ</Heading>
          <Flex>
            <Button as="a" href="/" mr={6}>
              Home
            </Button>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar size="sm" name="JB" src="" />
              </MenuButton>
              <MenuList>
                <MenuItem color="black">Settigs</MenuItem>
                <MenuItem color="black">Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box mt={8}>
          <Grid templateColumns='repeat(4, 1fr)' gap={2} w='full' h='full'>
            <GridItem colSpan={1}
              bg='white'
              w='full'
              h='full'
              p={3}
              borderRadius="md">
              <Tabs>
                <TabList>
                  <Tab onClick={() => setShowType("containers")}>Containers</Tab>
                  <Tab onClick={() => setShowType("stacks")}>Stacks</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <ContainersList setSelectedContainer={setSelectedContainer}/>
                  </TabPanel>
                  <TabPanel>
                    <StacksList setSelectedStack={setSelectedStack} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
            <GridItem colStart={2} colEnd={6} p={3} h='full' bg='white' w='full' borderRadius="md">
              {showType === "containers" ? (
                <ContainerDetails container={selectedContainer} />
              ) : (
                <StackDetails stack={selectedStack} />
              )}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
