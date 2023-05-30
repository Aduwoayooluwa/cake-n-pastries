import { Box, Flex, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

    return (
        <Stack justify={{md:"center"}} position="relative" bg="#48250f" height={{base:"400px", md:"200px"}} color="#f6a2b6" py={8}>
            <Box bg="whiteAlpha.100" left={{base: "-20%"}} top={{base: "-20%", md:"-50%"}} height={{base:"200px", md: "200px"}} width={{base:"200px", md: "200px"}}  borderRadius="100%" position={"absolute"}>

            </Box>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" px={8}>
            <Stack spacing={4}>
            <Flex align="center" direction="column" gap={3}>
                <Text fontSize="3xl" fontWeight="medium">
                CakeNPasteries
                </Text>
                <Text  display={{base:"none"}} fontSize="sm">123 Bakery Street, City, Country</Text>
                <Text ml={1} display={{md:"none"}} fontWeight={"semibold"} fontSize="lg">
                Delicious treats for every occasion
                </Text>

                
            </Flex>
                
            </Stack>
            {/* terms */}
            <Stack mt={{base: "40px", md: 0}} direction={{base:"column", md:"row"}} spacing={4}>
                    <Link href="/terms" fontSize={{base: "sm", md: "lg"}}>
                    Terms of Service
                    </Link>
                    <Link href="/privacy" fontSize={{base: "sm", md: "lg"}}>
                    Privacy Policy
                    </Link>
                    <Link href="/contact" fontSize={{base: "sm", md: "lg"}}>
                    Contact Us
                    </Link>
            </Stack>

            <Stack bottom="40px" position={{base: 'absolute', md:"inherit"}} direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#" aria-label="Facebook">
                <Icon as={RiFacebookFill} boxSize={6} />
            </Link>
            <Link href="#" aria-label="Instagram">
                <Icon as={RiInstagramFill} boxSize={6} />
            </Link>
            <Link href="#" aria-label="Twitter">
                <Icon as={RiTwitterFill} boxSize={6} />
            </Link>
            
            </Stack>

            <Text bottom="10px" position={{base: 'absolute', md:"inherit"}} textAlign={"center"} fontSize={{base:"sm",md:"lg"}} mt={{base: 4, md:0}}>
                © {currentYear} CakeNPasteries. All rights reserved.
            </Text>

        </Flex>

        
        <Box right={"0%"} bottom={{base:"0%", md: "0%"}} bg="whiteAlpha.100" height={{base:"200px", md: "400px"}} width={{base:"200px", md: "400px"}}  borderRadius="100%" position={"absolute"}>

            </Box>

            <Flex right={"50%"} top={{base:"100px", md:"50%"}} bg="whiteAlpha.200" height={{base:"60px", md: "30px"}} align="center" width={{base:"60px", md: "30px"}} justify="center"  borderRadius="100%" position={"absolute"}>
                    <Box width={{base:"20px", md:"10px"}} height={{base:"20px", md:"10px"}} borderRadius={"100%"} bg="whiteAlpha.300"></Box>
            </Flex>
            
        </Stack>
    );
};

export default Footer;
