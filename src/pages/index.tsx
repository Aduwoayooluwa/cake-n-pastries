import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Box, Stack } from '@chakra-ui/react'
import { Suspense, useState } from 'react';
import { Scene } from '@/models/scene.model';
import { Canvas } from '@react-three/fiber';
import LandingPage from '@/views/LandingPage';
import CartScene from '@/models/cart.model';
import Bubble from '@/views/Preloader';
import CartIcon from '@/models/cartIcon.model';
import CartModal from '@/views/CartModal';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <Box as='main' className={poppins.className}>
      <Bubble />
      
    </Box>
  )
}
