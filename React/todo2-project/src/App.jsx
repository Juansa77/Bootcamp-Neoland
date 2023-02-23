import { useState } from "react";
import React from "react";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";
// Creamos un contexto para las tareas
export const TaskContext = React.createContext();

function App() {
  //Declaramos un array vacio con la lista que tendrán las tareas y las seteammos con useState
  const [tasks, setTasks] = useState([]);
  //Declaramos el texto que introduciremos para añadir una nueva tarea y lo seteamos
  const [newTaskText, setNewTaskText] = useState("");

//Seteamos el texto que introduciremos en el input para que guarde el state
  const handleInput = (e) => {
    setNewTaskText(e.target.value);
  };
//Funcioón del botón para añadir tareas: cada vez que el valor no esté vacio, añadira un objeto con el valor del texto y la propiedad Completed en false por defecto
  const handleClick=()=>{
if(newTaskText.trim() !== "") {
  setTasks([...tasks,{text:newTaskText, completed:false}])
setNewTaskText("")} 
  }

  return (
    //Enmarcamos el contexto con los valores almacenados de las tareas y su seteo
    <TaskContext.Provider value={{tasks, setTasks}}>
    <div className="App">
      <h1>Lista de tareas</h1>
      <div>
        <input type="text" value={newTaskText} onChange={handleInput} />
        <button onClick={handleClick}>Add task</button>
      </div>
      <TaskList/>
    </div>
    </TaskContext.Provider>
  );
}

export default App;
