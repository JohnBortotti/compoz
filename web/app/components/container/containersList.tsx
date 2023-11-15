import { List, ListItem, Button } from "@chakra-ui/react";
import ContainerCard from "./containerCard";
import ContainerSearchBar from "./containerSearchBar";

export default function ContainersList() {
    return (
        <List spacing={2}>
            <ContainerSearchBar />
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <ContainerCard
                        name="nginx"
                        status="running"
                        stack="nginx-reverse-proxy"
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <ContainerCard
                        name="grafana"
                        status="running"
                        stack="monitoring"
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <ContainerCard
                        name="rabbitmq"
                        status="running"
                        stack="monitoring"
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <ContainerCard
                        name="jenkins"
                        status="stopped"
                        stack="CI/CD"
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <ContainerCard
                        name="bitwarden"
                        status="stopped"
                        stack="password-manager"
                    />
                </Button>
            </ListItem>
            <ListItem>
                <Button w="full" variant="ghost" justifyContent="flex-start">
                    <ContainerCard
                        name="elasticsearch"
                        status="running"
                        stack="monitoring"
                    />
                </Button>
            </ListItem>
        </List>
    )
}