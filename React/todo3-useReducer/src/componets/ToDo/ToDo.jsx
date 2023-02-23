import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { state } from "../../utils/InitialState";

const InitialState = state;

const reducer = (state, action) => {
    if (action.type === `ADD_TODO`) {
      const { name } = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          name,
          isCompleted: false,
        },
      ];
    }

    if (action.type === "TOGGLE_IS_COMPLETED") {
      const { id } = action.payload;
      const newState = state.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      return newState;
    }
  };

const ToDo = () => {

    const [todoText, setTodoText] = useState("")
    
    const [state, dispatch] = useReducer(reducer, InitialState)

    const handleChange = ({target})=> setTodoText(target.value)
    
    const handleClick = () => {
        dispatch({
          type: "ADD_TODO",
          payload: { name: todoText }
        });
        setTodoText("");
      };

      const handleToggle = (id) => {
        dispatch({
          type: "TOGGLE_IS_COMPLETED",
          payload: { id }
        });
      };

 

  return( 
  <div>
  {/* add nuevo todo o tarea */}
  <p>
        Nuevo TODO:
        <input type="text" value={todoText} onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </p>

      <h2>Listado</h2>

      {/* Listado */}
      <ul>
        {state.map(({ name, isCompleted, id }) => {
          const style = {
            // si es complete tachamos
            textDecoration: isCompleted ? "line-through" : "inherit"
          };

          return (
            // funcion de tachado -> completado
            <li key={id} style={style} onClick={() => handleToggle(id)}>
              {name}
            </li>
          );
        })}
      </ul>
  </div>
  );
};

export default ToDo;
