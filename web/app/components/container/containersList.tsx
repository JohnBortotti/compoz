import { List, ListItem, Button } from "@chakra-ui/react";
import ContainerCard from "./containerCard";
import ContainerSearchBar from "./containerSearchBar";
import { useEffect, useState } from "react";
import { ContainerCardType, setDetailsInterface } from "~/types/containerTypes";
import { getContainers } from "~/utils/api";

export default function ContainersList({ setDetails }: setDetailsInterface) {
    // const [searchTerm, setSearchTerm] = useState("");
    // const filteredContainers = containers.filter((container) =>
        // container.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    const [ containers, setContainers ] = useState<ContainerCardType[]>([]);

    useEffect(() => {
        const fetchContainers = async () => {
            const data = await getContainers();
            console.log(data);
            setContainers(data);
        };

        fetchContainers();
    }, []);

    return (
        <List spacing={2}>
            {/* <ContainerSearchBar
                onSearch={(term: any) => setSearchTerm(term)} 
            /> */}
            {containers.map((container) => (
                <ListItem key={container.id}>
                    <Button 
                        w="full" 
                        variant="ghost" 
                        justifyContent="flex-start" 
                        onClick={
                            () => setDetails({ type: "container", item: container })
                        }>
                        <ContainerCard
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