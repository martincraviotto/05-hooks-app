import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormTeminoWithcustomHook = () => {

    const {formState,onInputChange,onResetForm} = useForm(
        {
            termino:'',            
        }
    );

    const {termino}=formState;


  return (    

    <>
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
    </>
  )
}
