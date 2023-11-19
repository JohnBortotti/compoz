import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CompoZ" }
  ];
};

import { ChakraProvider, Grid, GridItem, Box, Flex, Heading, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, Tabs, TabList, TabPanels, Tab, TabPanel, StackProps } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ContainerDetails from "~/components/container/containerDetails";
import ContainersList from "~/components/container/containersList";
import StacksList from "~/components/stack/stacksList";
import { useState } from "react";
import { ContainerType, ContainerOrStack, MaybeContainer, MaybeStack, ShowingDetailsType, StackType } from "~/types/containerTypes";
import StackDetails from "~/components/stack/stackDetails";

export default function Index() {
  const [tabIndex, setTabIndex] = useState(0);
  const [showType, setShowType] = useState<ShowingDetailsType>("stacks");
  const [selectedContainer, setSelectedContainer] = useState<MaybeContainer>({ container: null });
  const [selectedStack, setSelectedStack] = useState<MaybeStack>({ stack: null });

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  const setDetails = (item: ContainerOrStack) => {
    switch (item.type) {
      case "stack":
        setShowType("stacks");
        setTabIndex(0);
        setSelectedStack({ stack: item.item as StackType });
        break;
      case "container":
        setShowType("containers");
        setTabIndex(1);
        setSelectedContainer({ container: item.item as ContainerType });
        break;
      default:
        break;
    }
  }

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
                <MenuItem color="black">Settings</MenuItem>
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
              <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                  <Tab onClick={() => setShowType("stacks")}>Stacks</Tab>
                  <Tab onClick={() => setShowType("containers")}>Containers</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <StacksList setDetails={setDetails} />
                  </TabPanel>
                  <TabPanel>
                    <ContainersList setDetails={setDetails} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
            <GridItem colStart={2} colEnd={6} p={3} h='full' bg='white' w='full' borderRadius="md">
              {showType === "containers" ? (
                <ContainerDetails
                  container={selectedContainer.container}
                  setDetails={setDetails}
                />
              ) : (
                <StackDetails stack={selectedStack.stack} setDetails={setDetails} />
              )}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
