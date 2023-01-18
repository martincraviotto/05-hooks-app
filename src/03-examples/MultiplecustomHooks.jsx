import React from 'react'
import { useCounter,useFetch,useForm } from '../hooks'
import { LoadingDefinition, BlockDefinition } from './'



export const MultiplecustomHooks = () => {

    const {formState,onInputChange,onResetForm} = useForm(
        {termino:'Sweet',}
    );

    const {termino}=formState;

    const {counter,increment} = useCounter(1);    
    
    const url =`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${termino}&contador=${counter}`;

    const  {data, isLoading, hasError} = useFetch(url);

    // undefined = undefined
    // !undefined = true
    // !! undefined = false
    const {author,definition,example} =  !!data && !!data.list && data.list[0];
    
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

            {isLoading
                ? <LoadingDefinition /> 
                : <BlockDefinition  
                    termino={termino} 
                    definition={definition} 
                    example={example} 
                    author={author}/>
            }

            <button 
                className='btn btn-outline-primary'
                onClick={()=>{increment()}}
            >Next definition</button>


        </>
    )
}
