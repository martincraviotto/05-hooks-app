import React, { useLayoutEffect, useRef, useState } from 'react'

export const BlockDefinition = ({termino,definition,example,author}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width:0,
        height:0,
    });

    useLayoutEffect(() => {
      const {width,height} = pRef.current.getBoundingClientRect();
      setBoxSize({width,height});


    }, [termino])


    return (
        <>
            <blockquote 
                className='blockquote text-end'
                style={ {display: 'flex'} }
            >                        
                <p className='mb-1'><b>Término:</b> {termino}</p>
                <p ref={pRef}  className='mb-1'><b>Definicion:</b> {definition}</p>
                <p className='mb-1'><b>Example:</b> {example}</p>
                <footer className='blockquote-footer mt-1'>{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
