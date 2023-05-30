import { Box, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import cartIcon from "@/assets/images/cartIcon.svg"
import { useAppStore } from '@/lib/store'
type Props = {}

const CartIcon = (props: Props) => {
    const { cart } = useAppStore()
    return (
        <Flex >
        <Box position="relative">
            <Image width={50} height={50} alt="icon-cart" src={cartIcon} />
            <Flex
                position="absolute"
                top={-2}
                right={-2}
                align="center"
                justify="center"
                bg="red.500"
                borderRadius="full"
                width={6}
                height={6}
                fontWeight="semibold"
                color="white"
                fontSize="sm"
            >
                <Text>{cart.length}</Text>
            </Flex>
            </Box>
        </Flex>
    )
}

export default CartIcon