"use client"
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Box, ButtonGroup, Button, Flex, Heading, IconButton, Text, useDisclosure, Spacer, Stack } from "@chakra-ui/react"
import {Rotate as HamburgerIcon } from "hamburger-react"
import Search from '@/components/Search.component'
import CartIcon from '@/models/cartIcon.model'
import CartModal from '@/views/CartModal'




type Props = {}

const Navigation = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const[isCartOpen, setIsCartOpen] = useState<boolean>(false)
    return (
        <>
        
            <Flex align="center"  p={4}  color={"gray.800"} >
                    <Box>
                        <Heading size="md">CakeNPasteries</Heading>
                    </Box>
                    <Spacer />

                    <Box display={{base: 'block', md: 'none'}}>
                    <HamburgerIcon toggle={setIsOpen} toggled={isOpen}/>
                    </Box>

                

                    {/* desktop menu */}
                    <Box display={{base: "none", md: "flex"}}  mx="6">
                    <Search />
                    </Box>

                    <Flex gap={"6"} align={"center"} width={""}  display={{base: "none", md: "flex"}}>
                        {/* menu items */}

                        <Text fontSize="xl" fontWeight={"semibold"} textColor="#48250f">Food</Text>

                        <Text fontSize="xl" fontWeight={"semibold"} textColor="#48250f">Drinks</Text>

                        <Text fontSize="xl" fontWeight={"semibold"} textColor="#48250f">Pastries</Text>

                        <Text fontSize="xl" fontWeight={"semibold"} textColor="#48250f">Cakes</Text>

                        <ButtonGroup gap="2">
                            <Button bg="#d31245" colorScheme='pink'>Log in</Button>
                            <Button bg="#d31245" colorScheme='pink'>Register</Button>
                        </ButtonGroup>
                        
                    </Flex>
                    
                    <CartModal setIsOpen={setIsCartOpen} isOpen={isCartOpen}/>
                </Flex>

                 {/* mobile menu */}
                <Stack position={"absolute"} align={"center"} width="100%" as="aside" px="10px" transition={"ease-in"}
                    display={{base: isOpen ? "block" : "none", md: 'none'}}>
                            {/* menu Items */}
                            <Search />

                </Stack>
        </>
            
    )
}

export default Navigation