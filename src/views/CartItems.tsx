import { Box, Flex, Text, IconButton, Button } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMinus as MinusIcon, AiOutlinePlus as AddIcon } from "react-icons/ai";
import { useSpring, animated } from "@react-spring/web";
import gsap from "gsap";

type CartItem = {
    idMeal: string;
    strMeal: string;
    price: number;
    quantity: number;
};

type ShoppingCartProps = {
    cartItems: CartItem[];
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
    const [items, setItems] = useState<CartItem[]>(cartItems);
    const animatedRefs = useRef<Array<HTMLElement | null>>([]);

    useEffect(() => {
        animatedRefs.current.forEach((ref, index) => {
        gsap.fromTo(
            ref,
            { opacity: 0.5, x: -20 },
            {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power1.inOut"
            }
        );
        });
    }, [items]);

    const handleIncrement = (itemId: string) => {
        setItems((prevItems) =>
        prevItems.map((item) =>
            item.idMeal === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
        );
    };

    const handleDecrement = (itemId: string) => {
        setItems((prevItems) =>
        prevItems.map((item) =>
            item.idMeal === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        );
    };

    const calculateTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <Box>
        {items.map((item, index) => (
            <Flex
            key={item.idMeal}
            alignItems="center"
            justifyContent="space-between"
            marginBottom="10px"
            ref={(ref) => (animatedRefs.current[index] = ref)}
            sx={{
                background: "linear-gradient(45deg, #FCEDEB, #F8C0BD)",
                padding: "10px",
                borderRadius: "8px"
            }}
            >
            <Text>{item.strMeal}</Text>
            <Flex alignItems="center">
                <IconButton
                aria-label="Decrement"
                icon={<MinusIcon />}
                onClick={() => handleDecrement(item.idMeal)}
                disabled={item.quantity === 1}
                sx={{ color: "pink", mr: "2" }}
                />
                <Text marginX="4px">{item.quantity}</Text>
                <IconButton
                aria-label="Increment"
                icon={<AddIcon />}
                onClick={() => handleIncrement(item.idMeal)}
                sx={{ color: "pink", ml: "2" }}
                />
            </Flex>
            </Flex>
        ))}
        <Flex
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            sx={{
            background: "linear-gradient(45deg, #FCEDEB, #F8C0BD)",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "10px",
            textAlign: "center"
            }}
        >
            <Text>Total Price:</Text>
            <Text ml="2" color="black">
            ${calculateTotalPrice()}
            </Text>
        </Flex>
    </Box>
    )
    }
export default ShoppingCart