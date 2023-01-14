import React from 'react'
import { FormTeminoWithcustomHook } from '../02-useEffect/FormTeminoWithcustomHook';
import { useFetch } from '../hooks/useFetch'

export const MultiplecustomHooks = () => {

    //const url =' https://api.goprogram.ai/inspiration';
    const url =' https://api.api-ninjas.com/v1/quotes?category=love';

    const  {data, isLoading, hasError} = useFetch(url);

    // undefined = undefined
    // !undefined = true
    // !! undefined = false

    const {author,definition,example} =  !!data && !!data.list && data.list[0];

    console.log(author,definition,example);

    return (
        <>
            <h1> Diccionario</h1>
            <hr/>
            <FormTeminoWithcustomHook />

            {(isLoading)
                ? (
                    <div className='alert alert-info text-center'>
                        Loading.....
                    </div>
                )
                : (

                    <blockquote className='blockquote text-end'>                        
                        <p className='mb-1'>Término: sweet</p>
                        <p className='mb-1'>Definicion: {definition}</p>
                        <p className='mb-1'>Example: {example}</p>
                        <footer className='blockquote-footer mt-1'>{author}</footer>
                    </blockquote>

                )
            }

            <button className='btn btn-outline-primary'>Next definition</button>


        </>
    )
}
