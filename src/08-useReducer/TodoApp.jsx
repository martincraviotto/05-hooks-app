import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description:'Recolectar la piedra del alma',
        //     done:false,
        // },    
    ];

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos) || []);
    }, [todos])
    

    const onHandleNewTodo = (todo)=>{        
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }

        dispatch(action);
    };

    const onHandleDeleteTodo = async (id) => {
        const action = {
            type:'[TODO] Remove Todo',
            payload:id
        }

        dispatch(action);
          
    }

    const onHandleToggleTodo = async (id) => {
        
        
        const action = {
            type:'[TODO] Toggle Todo',
            payload:id
        }

        dispatch(action);
          
    }


  return (
    <>
        <h1>TodoAPP: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ onHandleDeleteTodo} 
                    onToggleTodo={ onHandleToggleTodo}
                />                                
            </div>
            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={onHandleNewTodo} />                
            </div>
        </div>

    </>
  )
}
