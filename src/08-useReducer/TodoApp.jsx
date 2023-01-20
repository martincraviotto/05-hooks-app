import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        description:'Recolectar la piedra del alma',
        done:false,
    },
    {
        id: new Date().getTime() * 3,
        description:'Recolectar la piedra del tiempo',
        done:false,
    }
    ];

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const onHandleNewTodo = (todo)=>{        
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }

        dispatch(action);
    };

  return (
    <>
        <h1>TodoAPP: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList todos={todos} />                                
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
