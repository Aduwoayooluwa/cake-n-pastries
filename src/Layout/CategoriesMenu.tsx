import useGetData from '@/hooks/useGetData';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Box, Stack, Heading, Flex, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useAppStore } from '@/lib/store';

SwiperCore.use([Navigation, Pagination]);

const CategoriesMenu = ({ categories }: any) => {
    const url:string = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`

    // add to cart 
    const { addToCart } = useAppStore()

    const { data } = useGetData(url);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const swiperOptions = {
        navigation: false,
        pagination: {
        clickable: true,
        renderBullet: (index: any, className:any) =>
            `<span class="${className}" style="background-color: pink"></span>`,
        },
        slidesPerView: 4,
        scrollbar: true,
        autoplay: true,
        loop: true,
        autoplaydisableoninteraction: true,
        breakpoints: {
            // For mobile devices
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                },
                // For tablets and larger screens
                768: {
                slidesPerView: 4,
                spaceBetween: 20,
                },
            },
        };

        const swiperOptions2 = {
            navigation: false,
            pagination: {
            clickable: true,
            renderBullet: (index: any, className:any) =>
                `<span class="${className}" style="background-color: pink"></span>`,
            },
            slidesPerView: 2,
            scrollbar: true,
            autoplay: true,
            loop: true,
            autoplaydisableoninteraction: true,
            breakpoints: {
                // For mobile devices
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    },
                    // For tablets and larger screens
                    768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    },
                },
        };

    const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

    const boxHeight = useBreakpointValue({ base: '250px', sm: '300px', md: '350px' });

    return (<>
                <Text
        fontWeight="semibold"
        fontSize="24px"
        textAlign="center"
        textTransform="uppercase"
        color="pink.500"
        borderBottom="2px"
        borderColor="pink.500"
        pb="4px"
        marginTop="20px"
        >
        {categories}
        </Text>


        <Box display={{base: "none", md:"flex"}} marginTop="50px">
        
            <Swiper {...swiperOptions}>
                <Stack align="center" spacing={6}>
                {data?.meals?.slice(0, 10)?.map((item: any, index: number) => (
                    <SwiperSlide style={{ margin: '0 10px' }} key={index}>
                    <animated.div style={springProps}>
                        <Box
                        bg="#FCEDEB"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        height={boxHeight}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height="100%"
                            zIndex={hoveredIndex === index ? 1 : 0}
                            opacity={hoveredIndex === index ? 0.8 : 0}
                            transition="opacity 0.3s ease"
                            backgroundColor="pink"
                        />
                        <Flex align="center" direction="column" position="relative" width="100%" height={`calc(${boxHeight} - 50px)`}>
                            <Image
                            src={item?.strMealThumb}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            />
                            <Button
                            size="sm"
                            colorScheme="pink"
                            marginTop="10px"
                            opacity={hoveredIndex === index ? 1 : 0}
                            transform={`translateY(${hoveredIndex === index ? '0' : '20px'})`}
                            transition="opacity 0.3s ease, transform 0.3s ease"
                            onClick={() => addToCart(item)}
                            style={{pointerEvents: 'auto'}}
                            justifyContent={"center"}
                            zIndex={"50"}
                            >
                            Add to Cart
                            </Button>
                        </Flex>
                                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            padding="10px"
                            flex="1"
                        >
                            <Text
                            fontWeight="semibold"
                            color={hoveredIndex === index ? 'pink' : 'black'}
                            >
                            {item?.strMeal}
                            </Text>
                            
                        </Box>
                        </Box>
                    </animated.div>
                    </SwiperSlide>
                ))}
                </Stack>
            </Swiper>

            </Box>

            <Box display={{base: "flex", md:"none"}} marginTop="50px">
            <Swiper {...swiperOptions2}>
                <Stack align="center" spacing={6}>
                {data?.meals?.slice(0, 10)?.map((item: any, index: number) => (
                    <SwiperSlide style={{ margin: '0 10px' }} key={index}>
                    <animated.div style={springProps}>
                        <Box
                        bg="#FCEDEB"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        height={boxHeight}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height="100%"
                            zIndex={hoveredIndex === index ? 1 : 0}
                            opacity={hoveredIndex === index ? 0.8 : 0}
                            transition="opacity 0.3s ease"
                            backgroundColor="pink"
                        />
                        <Box position="relative" width="100%" height={`calc(${boxHeight} - 50px)`}>
                            <Image
                            src={item?.strMealThumb}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            />
                            
                            <Button
                            size="sm"
                            colorScheme="pink"
                            marginTop="10px"
                            
                            opacity={hoveredIndex === index ? 1 : 0}
                            transform={`translateY(${hoveredIndex === index ? '0' : '20px'})`}
                            transition="opacity 0.3s ease, transform 0.3s ease"
                            onClick={() => {
                                addToCart(item)
                            }}
                            style={{pointerEvents: 'auto'}}
                            justifyContent= "center"
                            zIndex={"50"}
                            >
                            Add to Cart
                            </Button>
                        </Box>
                                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            padding="10px"
                            flex="1"
                        >
                            <Text
                            fontWeight="semibold"
                            color={hoveredIndex === index ? 'pink' : 'black'}
                            >
                            {item?.strMeal}
                            </Text>
                        
                        
                        </Box>
                        </Box>
                    
                    </animated.div>
                    </SwiperSlide>
                ))}
                </Stack>
            </Swiper>
            </Box>
    </>
        
    );
}

export default CategoriesMenu;

