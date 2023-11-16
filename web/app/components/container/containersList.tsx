import { List, ListItem, Button } from "@chakra-ui/react";
import ContainerCard from "./containerCard";
import ContainerSearchBar from "./containerSearchBar";
import { useState } from "react";
import { ContainerCardProp } from "~/types/containerTypes";

const containers: ContainerCardProp[] = [
    {
        id:"1", 
        name: "nginx",
        status: "running",
        stack: "nginx-reverse-proxy",
    },
    {
        id:"2", 
        name: "grafana",
        status: "running",
        stack: "monitoring",
    },
    {
        id:"3", 
        name: "rabbitmq",
        status: "running",
        stack: "monitoring",
    },
    {
        id:"4", 
        name: "jenkins",
        status: "stopped",
        stack: "CI/CD",
    },
    {
        id:"5", 
        name: "bitwarden",
        status: "stopped",
        stack: "password-manager",
    },
    {
        id:"6", 
        name: "elasticsearch",
        status: "running",
        stack: "monitoring",
    },
];

export default function ContainersList({setSelectedContainer} : any) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContainers = containers.filter((container) =>
        container.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <List spacing={2}>
            <ContainerSearchBar onSearch={(term: any) => setSearchTerm(term)} />
            {filteredContainers.map((container) => (
                <ListItem key={container.id}>
                    <Button w="full" variant="ghost" justifyContent="flex-start" onClick={() => setSelectedContainer(container)}>
                        <ContainerCard
                            name={container.name}
                            status={container.status}
                            stack={container.stack}
                        />
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}