import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Box, Stack } from '@chakra-ui/react'
import { Suspense, useState } from 'react';
import { Scene } from '@/models/scene.model';
import { Canvas } from '@react-three/fiber';
import LandingPage from '@/views/LandingPage';
import CartScene from '@/models/cart.model';
import CartModal from '@/views/CartModal';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    });

export default function Home() {
    const [isOpen, setIsCartOpen] = useState(false)
    return (
        <Box as='main' className={poppins.className}>
        <LandingPage /> 
        
        <Stack
            borderRadius="full"
            boxShadow="xl"
            bg="whiteAlpha.600"
            position="fixed"
            bottom="0%"
            right="-10%"
            py="15px"
            display={{ md: "none" }}
            transform="translate(-50%, -50%)"
            >
            <CartModal isOpen={isOpen} setIsOpen={setIsCartOpen} />
        </Stack>

        </Box>
    )
}
