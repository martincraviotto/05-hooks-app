import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user,setUser} = useContext( UserContext );
  

  return (
    <>
        <h1>Login Page</h1>
        <hr />

        <pre>
          {JSON.stringify(user,null,6)}
        </pre>

        <button 
          className='btn btn-primary'
          onClick={()=>{setUser({id:111,name:'juan',email:'correo@gmail.com'})}}
        >
          Establecer usuario
        </button>
    </>
  )
}