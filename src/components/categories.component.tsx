import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    categories: any
}

const Categories = ({ categories }: Props) => {
    return (
    <Flex>
        <Box>
            {categories?.strCategory}
        </Box>
    </Flex>
    )
}

export default Categories