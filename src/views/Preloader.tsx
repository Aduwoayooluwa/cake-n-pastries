"use client"
import React, { useLayoutEffect, useState } from "react";
import "./styles/preloader.module.css"
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import CookingGif from "@/assets/images/cooking.gif"
import gsap from 'gsap'
import BarLoader from "@/components/loaders/bar.loader";
import LandingPage from "./LandingPage";
import CartModal from "./CartModal";

const Bubble = ({ size }: any) => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false)
    const words = [
        "cooking your desires",
        "it won't be long"
    ]

    const timeline = gsap.timeline({
            yoyo: true,
            
    })

    useLayoutEffect(() => {
        timeline.from(".box", {
            duration: 1,
            delay: 2,
            x:' 20%', 
            ease: "bounce",
        })

        timeline.play()
    }, [timeline])
    


    return (
        <>
            {
                !isLoadingComplete && (
                    <Flex bg="#FFFBF5" direction="column" width={"100%"} align="center" height={"100vh"} justify="center" position={"absolute"}>
                
                <Image data-download="none" src={CookingGif} alt="cooking" width={400} height={400}/>
                <Text className="box" fontWeight={"semibold"}>{words[0]}...</Text>
                Cooking your dreams..
                <BarLoader setIsLoadingComplete={setIsLoadingComplete}/>
            </Flex>
                )
            }

            { isLoadingComplete && (<>
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
                <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
            </Stack>
            </>)}
        </>
        
        
    );
};

export default Bubble;