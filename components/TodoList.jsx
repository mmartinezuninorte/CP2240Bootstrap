import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({todos=[], updateTodo}) {
    
  return (
    <>
        <span>Pendientes: 03.</span>
        <ul className="list-group">
            {todos?.map((item)=>{
                    return(<TodoItem
                        key={item.id} 
                        id={item.id}
                        descripcion = {item.descripcion}
                        isDone ={item.isDone}
                        updateTodo={updateTodo}/>)
                }
            )}
        </ul>
    </>
  )
}