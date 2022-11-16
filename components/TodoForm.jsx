import React from 'react'
import { useState } from 'react'

const VALIDATION = /^([a-záéíóúñA-ZÁÉÍÓÚÑ0-9 )]*)$/

export  function TodoForm({onSubmit}) {

    const [{todo, todoError}, setTodoField] = useState({todo: "", todoError:""})

       const todoChangeHandler = (e) =>{
        let newError = ""
        const matchRegex = VALIDATION.test(e.target.value)
        if (!matchRegex){
            newError = "Formato de texto no permitido"
        }
        setTodoField({todo: e.target.value, todoError: newError})
        }

        const handleSubmit = (e)=>{
            e.preventDefault()
            if (todoError.length !== 0){
                setTodoField(({todo, todoError})=>{
                    return{todo, todoError:"BLOQUEO SEGURIDAD: Formato erroneo"}
                })
            }
    
            if (todo.length === 0){
                setTodoField(({todo, todoError})=>{
                    return{todo, todoError:"Por favor diligencie el campo"}
                })
            }
            onSubmit(todo)
            setTodoField({todo:"", todoError:""})
    
        }
  return (
    <form onSubmit={handleSubmit}>
        <h3>Nuevo Pendiente</h3>
        <input 
            type="text"
            id="input-todo"
            name="input-todo"
            autoComplete='off'
            placeholder='Descripcion'
            value={todo}
            onChange={todoChangeHandler}/>
        <span>{todoError}</span> 
        <button type="submit" className="btn btn-outline-success" disabled={todoError.length!==0}>Añadir pendiente</button>
    </form>
  )
}
