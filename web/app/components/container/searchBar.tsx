import { Input, Flex, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar({placeholder="Search container", searchTerm, setSearchTerm } : {placeholder: string} & any ) {
    const handleSearch = (event: any) => setSearchTerm(event.target.value)

    return (
        <Flex alignItems="center" justifyContent="space-between" mb={4}>
            <InputGroup>
            <Input
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleSearch}
            />
              <InputRightElement>
                <SearchIcon color="gray.500" pointerEvents='none'/>
              </InputRightElement> 
            </InputGroup>
        </Flex>
    );
}