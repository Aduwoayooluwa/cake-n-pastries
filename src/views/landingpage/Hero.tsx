import Navigation from '@/Layout/Navigation'
import { Scene } from '@/models/scene.model'
import { Box, Button, Box as Div, Flex, Heading, Stack, Text, useBreakpointValue} from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import React, { Suspense } from 'react'
import LemonImage from "@/assets/images/lemon_homePage.webp"
import Data from "../Data"
type Props = {}

const Hero = (props: Props) => {
    const width = useBreakpointValue({ base: "full", md: "fit-content" });
    return (
        <Div bg={"#FFFBF5"} height={{base: "fit", md:"fit"}}>
            <Navigation />

            <Flex gap={7}  paddingY={"20px"} width={"100%"} flexDirection={{base:"column", md:"row"}}  order={{ base: 1, md: 2 }} align={"center"}>
            
            <Div width={width} display={{base: "none", md:"flex"}} maxWidth={{base:"100%", md:"fit-content"}}>
                
                {/* canvas element */}
                <Flex className='hero-text' height={"15rem"} maxWidth={{base: "100%", md:"fit-content"}} align={"center"}>
                    <Canvas shadows>
                    <Suspense fallback={null}>
                    <Scene />
                    </Suspense>
                    </Canvas>
                </Flex>
            </Div>

            {/* text */}
            <Stack paddingY={{base: "20px", md:"0"}} width={width} align={"center"} gridGap={10} maxWidth={{base:"100%", md:"full"}}>
                <Heading className='hero-text' textColor={"#8E44AD"} as={"h4"} display={{base: "none", md:"flex"}}  textAlign={"center"} width={{base:"100%", md:"100%"}}>Satisfy Your Sweet Cravings with our Tempting Selection</Heading>
                <Heading className='hero-text' textColor={"#8E44AD"} as={"h5"} display={{base: "flex", md:"none"}}  textAlign={"center"} width={{base:"100%", md:"100%"}}>Satisfy Your Sweet Cravings with our Tempting Selection</Heading>
                <Button className='hero-text' colorScheme={"pink"} bg="#FF69B4" width={"300px"}>Treat Yourself</Button>
            </Stack>
            
            <Box display={{base:"none", md:"flex"}}>
            <Image className='hero-text'  src={LemonImage} alt="Image-lemon" width={300} height={300}/>
            </Box>
            
            </Flex>

            <Data />
        </Div>
    )
}

export default Hero