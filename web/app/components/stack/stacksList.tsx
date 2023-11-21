import { List, ListItem, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { StackType, setDetailsInterface } from "~/types/containerTypes";
import SearchBar from "../container/searchBar";
import { getStacks } from "~/utils/api";
import StackListItem from "./stackListItem";

export default function StacksList({setDetails}: setDetailsInterface) {
    const [stacks, setStacks] = useState<StackType[]>([]);
    const [filteredStacks, setFilteredStacks] = useState<StackType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchContainers = async () => {
            const data = await getStacks();
            setStacks(data);
        };

        fetchContainers();
    }, []);
    
    useEffect(() => {
        setFilteredStacks(
            stacks.filter(stack =>
                stack.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [stacks, searchTerm]);

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
                        <StackListItem name={stack.name} count={stack.containers.length} />
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}