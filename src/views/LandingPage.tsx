import { Box, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Hero from './landingpage/Hero'

import { useSpring, animated } from '@react-spring/web'
import CategoriesMenu from '@/Layout/CategoriesMenu'
import Footer from '@/Layout/Footer'
import CartIcon from '@/models/cartIcon.model'
import CartModal from './CartModal'
type Props = {}

function LandingPage({}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    
    const [props, set] = useSpring(() => ({
        opacity: 0.6,
        transform: 'translateY(0)',
        from: { opacity: 0.6, transform: 'translateY(50px)' },
    }));
    
    useEffect(() => {
        const handleScroll = () => {
        // Update animation based on scroll position
        // Calculate animation values based on scroll position
        const opacity = 1// ...
        const translateY = 0 // ...

        // Update animation values
        set({ opacity, transform: `translateY(${translateY}px)` });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [set]);
    
    return (
        <animated.div style={props}>
            <Box>
            <Hero />
            {/* <AllMeals categories={"Seafood"}/> */}
            <CategoriesMenu categories={"Starter"}/>
            <CategoriesMenu categories={"Seafood"}/>
            <CategoriesMenu categories={"Chicken"}/>
            <CategoriesMenu categories={"Dessert"}/>
            <CategoriesMenu categories={"Pork"}/>
            <CategoriesMenu categories={"Pasta"}/>

            </Box>
        
            <Footer />
        </animated.div>
    
    )
}

export default LandingPage