"use client"
import React, { useLayoutEffect, useState } from "react";
import "./styles/preloader.module.css"
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import CookingGif from "@/assets/images/cooking.gif"
import gsap from 'gsap'
import BarLoader from "@/components/loaders/bar.loader";
import LandingPage from "./LandingPage";

const Bubble = ({ size }: any) => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
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
    }, [])
    


    return (
        <>
            {
                !isLoadingComplete && (
                    <Flex direction="column" width={"100%"} align="center" position={"absolute"} bg="whiteAlpha.200">
                
                <Image data-download="none" src={CookingGif} alt="cooking" width={400} height={400}/>
                <Text className="box" fontWeight={"semibold"}>{words[0]}...</Text>
                Cooking your dreams..
                <BarLoader setIsLoadingComplete={setIsLoadingComplete}/>
            </Flex>
                )
            }

            { isLoadingComplete && (<LandingPage />)}
        </>
        
        
    );
};

export default Bubble;