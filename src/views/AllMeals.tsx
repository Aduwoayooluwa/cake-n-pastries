import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import useGetData from "@/hooks/useGetData";
import { useTransition, animated } from "@react-spring/web";
import Image from "next/image";

const AllMeals = ({categories} : any) => {
  const { data, isLoading } = useGetData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`);

  const transitions = useTransition(data?.meals, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 400, friction: 25 },
    trail: 100,
  });

  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" }}
        gap={4}
        alignItems="center"
        justifyContent="center"
      >
        {transitions((styles, item, _, index) => (
          <animated.div key={item?.id} style={styles}>
            <Box
              p={4}
              boxShadow="xl"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="center"
                width="100%"
                height="0"
                paddingBottom="100%"
                position="relative"
              >
                <Image
                  src={item?.strMealThumb}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Text fontWeight="semibold" paddingTop="10px">
                {item?.strMeal}
              </Text>
            </Box>
          </animated.div>
        ))}
      </Grid>
    </Box>
  );
};

export default AllMeals;
