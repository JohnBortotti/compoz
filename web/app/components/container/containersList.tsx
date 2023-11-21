import { List, ListItem, Button } from "@chakra-ui/react";
import ContainerListItem from "./containerListItem";
import { useEffect, useState } from "react";
import { ContainerType, setDetailsInterface } from "~/types/containerTypes";
import { getContainers } from "~/utils/api";
import SearchBar from "./searchBar";

export default function ContainersList({ setDetails }: setDetailsInterface) {
    const [ containers, setContainers ] = useState<ContainerType[]>([]);
    const [filteredContainers, setFilteredContainers] = useState<ContainerType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        const fetchContainers = async () => {
            const data = await getContainers();
            setContainers(data);
        };

        fetchContainers();
    }, []);

    useEffect(() => {
        setFilteredContainers(
            containers.filter(container =>
                container.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [containers, searchTerm]);

    return (
        <List spacing={2}>
            <SearchBar
                setSearchTerm={setSearchTerm}
            />
            {filteredContainers.map((container) => (
                <ListItem key={container.id}>
                    <Button 
                        w="full" 
                        variant="ghost" 
                        justifyContent="flex-start" 
                        onClick={
                            () => setDetails({ type: "container", item: container })
                        }>
                        <ContainerListItem
                            name={container.name}
                            state={container.state}
                            stack={container.stack}
                        />
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}