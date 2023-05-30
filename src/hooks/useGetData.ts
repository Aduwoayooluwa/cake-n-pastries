import React from 'react'
import useSWR from "swr"
import axios from "axios"
type Props = {
    url: string
}


const fetcher = (url:string) => axios.get(url).then(res => res.data)

const useGetData = ( url : string) => {

    const { data, error, isLoading } = useSWR(url, fetcher)


    return { data, error, isLoading}
}

export default useGetData