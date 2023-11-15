import { Input, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

export default function ContainerSearchBar({placeholder="Search container"} : {placeholder: String}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        console.log(`Searching for containers with name or stack containing "${searchTerm}"`);
    };

    return (
        <Flex alignItems="center" justifyContent="space-between" mb={4}>
            <Input
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e: any) => setSearchTerm(e.target.value)}
                mr={4}
            />
            <Button colorScheme="gray" onClick={handleSearch}>
            <SearchIcon />
            </Button>
        </Flex>
    );
}