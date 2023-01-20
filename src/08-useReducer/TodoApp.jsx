import React from 'react'
import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const {todos,onHandleNewTodo,onHandleDeleteTodo
           ,onHandleToggleTodo,todosCount,pendingTodosCount} = useTodo();

  return (
    <>
        <h1>TodoAPP: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
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
