import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {}

const BarLoader = (props: Props) => {
    const [width, setWidth] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
        setWidth((prev) => prev + 10)
        }, 500)

        if (width >= 100) {
            clearInterval(interval)
            router.push("/home")
        }

        return () => {
        clearInterval(interval)
        }
    }, [width, router])

    return (

    <Flex paddingX="20px" direction="column" align="center" width="100%" bg="whiteAlpha.500">
        <Box
            height="24px"
            bg="green.300"
            width={`${width}%`}
            transition="none"
        />
        {width}%
    </Flex>
    )
}

export default BarLoader
