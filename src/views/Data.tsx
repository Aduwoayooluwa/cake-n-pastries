import useGetData from '@/hooks/useGetData'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Stack,  Heading, Text } from '@chakra-ui/react';

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
      speed: 500,
      mousewheel: {
          sensitivity:0.5
      },
      navigation: false,
      pagination: {
      clickable: true,
      renderBullet: (index: any, className:any) =>
          `<span class="${className}" style="background-color: #d31245"></span>`,
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
              <Box bg="#361500" height="60px" display="flex" alignItems="center" justifyContent="center">
                <Text color="white" size="md" fontWeight={"medium"}>
                  {item?.strCategory}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Stack>
      </Swiper>
    </Box>
    )
}

export default Data