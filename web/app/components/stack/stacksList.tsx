import { List, ListItem, Button } from "@chakra-ui/react";
import StackCard from "./stackCard";
import { useState } from "react";
import { setDetailsInterface } from "~/types/containerTypes";
import SearchBar from "../container/searchBar";

const stacks = [
    { id:"1", name: "nginx", count: 3 },
    { id:"2", name: "grafana", count: 4 },
    { id:"3", name: "rabbitmq", count: 1 },
    { id:"4", name: "jenkins", count: 1 },
];

export default function StacksList({setDetails}: setDetailsInterface) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStacks = stacks.filter((stack) =>
        stack.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <List spacing={2}>
            <SearchBar
                placeholder="Search stack"
                setSearchTerm={setSearchTerm}
            />
            {filteredStacks.map((stack) => (
                <ListItem key={stack.id}>
                    <Button
                        w="full" 
                        variant="ghost"
                        justifyContent="flex-start" 
                        onClick={
                            () => setDetails({ type: "stack", item: stack })
                        }> 
                        <StackCard id={stack.id} name={stack.name} count={stack.count} />
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}