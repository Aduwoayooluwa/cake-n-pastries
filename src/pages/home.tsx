import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import { Suspense } from 'react';
import { Scene } from '@/models/scene.model';
import { Canvas } from '@react-three/fiber';
import LandingPage from '@/views/LandingPage';
import CartScene from '@/models/cart.model';

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    });

export default function Home() {
    return (
        <Box as='main' className={poppins.className}>
        <LandingPage /> 
        
        </Box>
    )
}
