import { List, ListItem, Button } from "@chakra-ui/react";
import StackCard from "./stackCard";
import ContainerSearchBar from "../container/containerSearchBar";

export default function StacksList() {
    return (
        <List spacing={2}>
            <ContainerSearchBar placeholder="Search stack" />
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <StackCard
                        name="nginx"
                        count={2}
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <StackCard
                        name="grafana"
                        count={4}
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <StackCard
                        name="rabbitmq"
                        count={1}
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <StackCard
                        name="jenkins"
                        count={1}
                    />
                </Button>
            </ListItem>
        </List>
    )
}