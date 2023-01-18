import React from 'react'

export const BlockDefinition = ({termino,definition,example,author}) => {
    return (
        <blockquote className='blockquote text-end'>                        
            <p className='mb-1'><b>Término:</b> {termino}</p>
            <p className='mb-1'><b>Definicion:</b> {definition}</p>
            <p className='mb-1'><b>Example:</b> {example}</p>
            <footer className='blockquote-footer mt-1'>{author}</footer>
        </blockquote>
    )
}
