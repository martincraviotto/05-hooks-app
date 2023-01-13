import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultiplecustomHooks = () => {

    const  {data, isLoading, hasError} = useFetch('https://api.goprogram.ai/inspiration');

    console.log({data, isLoading, hasError});

    return (
        <>
            <h1> BrakingBad Quotes</h1>
            <hr/>
        </>
    )
}
