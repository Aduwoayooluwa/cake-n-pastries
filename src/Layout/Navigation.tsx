"use client"
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Box, ButtonGroup, Button, Flex, Heading, IconButton, Text, useDisclosure, Spacer } from "@chakra-ui/react"
import {Rotate as HamburgerIcon } from "hamburger-react"
import Search from '@/components/Search.component'
import CartIcon from '@/models/cartIcon.model'
import CartModal from '@/views/CartModal'




type Props = {}

const Navigation = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const[isCartOpen, setIsCartOpen] = useState<boolean>(true)
    return (
            <Flex align="center"  p={4}  color={"gray.800"} >
                <Box>
                    <Heading size="md">CakeNPasteries</Heading>
                </Box>
                <Spacer />
                <IconButton
                    aria-label='Menu'
                    icon={<HamburgerIcon />}
                    display={{base: 'block', md: 'none'}}

                />

                {/* mobile menu */}
                <Box 
                display={{base: isOpen ? "block" : "none", md: 'none'}}>
                        {/* menu Items */}
                </Box>

                {/* desktop menu */}
                <Box display={{base: "none", md: "flex"}}  mx="6">
                <Search />
                </Box>

                <Flex gap={"6"} align={"center"} width={""}  display={{base: "none", md: "flex"}}>
                    {/* menu items */}

                    <Text>Food</Text>

                    <Text>Drinks</Text>

                    <Text>Pastries</Text>

                    <Text>Cakes</Text>

                    <ButtonGroup gap="2">
                        <Button colorScheme='pink'>Log in</Button>
                        <Button colorScheme='pink'>Register</Button>
                    </ButtonGroup>
                    
                </Flex>
                
                <CartModal setIsOpen={setIsCartOpen} isOpen={isCartOpen}/>
            </Flex>
    )
}

export default Navigation