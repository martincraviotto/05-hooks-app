import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm';

export const MultiplecustomHooks = () => {

    const {formState,onInputChange,onResetForm} = useForm(
        {
            termino:'Sweet',            
        }
    );

    const {termino}=formState;

    const {counter,increment} = useCounter(1);    

    //const url =' https://api.goprogram.ai/inspiration';
    //const url =`https://api.api-ninjas.com/v1/quotes?category=love&contador=${counter}`;
    //const url =`https://api.api-ninjas.com/v1/quotes?category=${termino}&contador=${counter}`;
    const url =`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${termino}&contador=${counter}`;
    console.log(`URL GENERADA ES : ${url}`);

    const  {data, isLoading, hasError} = useFetch(url);

    // undefined = undefined
    // !undefined = true
    // !! undefined = false
    const {author,definition,example} =  !!data && !!data.list && data.list[0];

    console.log(url, author,definition,example);
    
    return (
        <>
            <h1> Diccionario</h1>
            <hr/>
            
            <h1>Término</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Termino"
                name="termino"
                value={termino}
                onChange={onInputChange}
            />
            
            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>






            {(isLoading)
                ? (
                    <div className='alert alert-info text-center'>
                        Loading.....
                    </div>
                )
                : (

                    <blockquote className='blockquote text-end'>                        
                        <p className='mb-1'><b>Término:</b> {termino}</p>
                        <p className='mb-1'><b>Definicion:</b> {definition}</p>
                        <p className='mb-1'><b>Example:</b> {example}</p>
                        <footer className='blockquote-footer mt-1'>{author}</footer>
                    </blockquote>

                )
            }

            <button 
                className='btn btn-outline-primary'
                onClick={()=>{increment()}}
            >Next definition</button>


        </>
    )
}
