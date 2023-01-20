import { useEffect, useReducer } from 'react'
import {todoReducer} from './../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const initialState = [];

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



  return {
    todos: todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=>!todo.done).length,
    onHandleNewTodo:onHandleNewTodo,
    onHandleDeleteTodo:onHandleDeleteTodo,
    onHandleToggleTodo:onHandleToggleTodo,
  }
}
