import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { NavBar } from "./components/NavBar";
import { useState } from "react";


const todosLosItems=[
  {id:0, descripcion:"Nueva Tarea", isDone:true},
  {id:1, descripcion:"Ver la sesi&oacute;n #06", isDone:true},
  {id:2, descripcion:"Hacer el componente pr&aacute;ctico", isDone:false},
  {id:3, descripcion:"Guardar c&aacute;mbios", isDone:false},
  {id:4, descripcion:"Repasar contenido de JS", isDone:false},
]


export default function App() {

  const [todos, setTodos]= useState(todosLosItems)

  const updateTodo = (id)=>{
    const newTodos = [...todos]
    const indexBuscado = newTodos.findIndex((tarea)=> tarea.id === id)
    newTodos[indexBuscado].isDone = !newTodos[indexBuscado].isDone
    setTodos(newTodos)
  }


  const handleSubmitForm =(todo)=>{
    const newTodo = {
      id: todos.at(-1).id + 1,
      descripcion: todo,
      isDone: false,
    }
    setTodos([...todos,newTodo])
  }

  let tipoUsuario='User'
  var validacion = (tipoUsuario==='Admin')
  
  const metodo2 =(show)=>{
    if (!show) return;
    const contenidoAMostrar= 'Texto oculto por comprobacion'
    return (<p>{contenidoAMostrar}</p>);
  }

  return (
    <>
      <NavBar />
      <h1>Lista de Pendientes</h1>
      <TodoList todos={todos} updateTodo={updateTodo}/>

      <TodoForm onSubmit={handleSubmitForm}/>


      {validacion ? (<button>Eliminar TODOS los pendientes</button>) : (<p>No tienes los permisos suficientes</p>)}
      {metodo2(validacion)}
    </>
  );
}