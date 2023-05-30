import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <InputGroup width={"100%"}>
        <InputLeftElement pointerEvents="none">
            <SearchIcon
            color={isFocused ? "#d31245" : "gray.300"}
            transition="color 0.3s"
            />
        </InputLeftElement>
        <Input
            type="text"
            placeholder="Search"
            onFocus={handleFocus}
            onBlur={handleBlur}
            width={{base: "100%", md:"500px"}}
            focusBorderColor={isFocused ? "#d31245" : undefined}
        />
        </InputGroup>
    );
};

export default Search;
