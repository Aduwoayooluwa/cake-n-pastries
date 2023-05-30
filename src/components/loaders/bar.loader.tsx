import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

type Props = {
    setIsLoadingComplete: any
};

const BarLoader = ({setIsLoadingComplete }: Props) => {
    const [width, setWidth] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const tl = gsap.timeline();

        const interval = setInterval(() => {
        setWidth((prev) => prev + 10);
        }, 500);

        if (width >= 100) {
        clearInterval(interval);
        tl.to('.loader-bar', { duration: 0.5, scaleX: 0, ease: 'power2.in' });
        tl.to('.loader', { duration: 0.3, opacity: 0, ease: 'power2.in' });
        tl.to('.loader', { duration: 0.1, height: 0, display: 'none', ease: 'power2.out' });
        //router.push('/home');
        setIsLoadingComplete(true);
        }

        return () => {
        clearInterval(interval);
        };
    }, [width, setIsLoadingComplete]);

    return (
        <Flex
        paddingX={{ base: '10px', md: '20px' }}
        direction="column"
        align="center"
        width="100%"
        
        bg="whiteAlpha.500"
        className="loader"
        >
        <Box
            height="8px"
            border={"1px solid black"}
            borderRadius={"20px"}
        bg="pink.300"
        width={{ base: `${width}%`, md: '100%' }}
        transition="none"
        py={"10px"}
        className="loader-bar"
        />
        {width}%
    </Flex>
  );
};

export default BarLoader;
