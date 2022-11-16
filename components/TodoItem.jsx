import React from 'react'

export function TodoItem({
    updateTodo, 
    descripcion, 
    id,
    isDone=false,
    }) {
    const doneClass = isDone ? " done":  ""  ;

  return (
    <li key={id} id={id} className={'list-group-item' +doneClass} onClick={()=> updateTodo(id)}>
      {descripcion} 
      </li>
  )
}