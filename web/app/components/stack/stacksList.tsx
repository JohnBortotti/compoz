import { List, ListItem, Button } from "@chakra-ui/react";
import StackCard from "./stackCard";
import ContainerSearchBar from "../container/containerSearchBar";
import { useState } from "react";

const stacks = [
    { id:"1", name: "nginx", count: 3 },
    { id:"2", name: "grafana", count: 4 },
    { id:"3", name: "rabbitmq", count: 1 },
    { id:"4", name: "jenkins", count: 1 },
];

export default function StacksList({setSelectedStack}: any) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStacks = stacks.filter((stack) =>
        stack.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <List spacing={2}>
            <ContainerSearchBar
                placeholder="Search stack"
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            {filteredStacks.map((stack) => (
                <ListItem key={stack.id}>
                    <Button w="full" variant="ghost" justifyContent="flex-start" onClick={() => setSelectedStack(stack)} >
                        <StackCard id={stack.id} name={stack.name} count={stack.count} />
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}