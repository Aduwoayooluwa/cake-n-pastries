import useGetData from '@/hooks/useGetData'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Stack,  Heading } from '@chakra-ui/react';

import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// let ScrollTrigger= {

// }
SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger)


type Props = {}

const Data = (props: Props) => {
    const ref = useRef(null)
    const swiperOptions = {
        navigation: false,
        pagination: true,
        slidesPerView: 4,
        scrollbar:true,
        autoplay:true,
        loop: true,
        autoplayDisableOnInteraction:true,
        paginationBullets:{
            color: "red",
            size: 16,
            shape: "circle",
          }
        };
    
        React.useEffect(() => {
            gsap.from('.slide-content', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: '.slide-content',
                start: 'top bottom-=200',
                end: 'top center',
                scrub: true,
            },
            });
        }, []);

    const { data } = useGetData("https://www.themealdb.com/api/json/v1/1/categories.php")
    console.log(data?.categories?.strCategory)

    return (

        <Box marginTop="50px">
      <Swiper {...swiperOptions}>
        <Stack align="center" spacing={6}>
          {data?.categories?.map((item: any, index: number) => (
            <SwiperSlide  style={{ margin: '0 10px' }} key={index}>
              <Box bg="#361500" height="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading color="white" size="md" as="h6">
                  {item?.strCategory}
                </Heading>
              </Box>
            </SwiperSlide>
          ))}
        </Stack>
      </Swiper>
    </Box>
    )
}

export default Data