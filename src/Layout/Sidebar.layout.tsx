import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Stack, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import React from 'react'

type Props = {
    children: React.ReactElement[]
}

const Sidebar = ({ children }: Props) => {
    const { isOpen, onOpen, onClose} = useDisclosure()
    const [isMobile] = useMediaQuery("(max-width: 767px)")
    
    if (isMobile) {
        return null;
    }
    return (
        <Flex>
            <Box bg="gray.200" w="150px" h="80vh" p={4}>
            <Stack spacing={4}>
            <Text fontWeight="bold">Categories</Text>
            {/* Your categories */}
            <Text>Category 1</Text>
            <Text>Category 2</Text>
            <Text>Category 3</Text>
            </Stack>

            
            </Box>

            <Box >
            { children}
            </Box>
        </Flex>
        
    )
}

export default Sidebar