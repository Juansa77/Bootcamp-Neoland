import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../App";
import { useMemo } from "react";
import { useCallback } from "react";

const TaskList = () => {
  //Nos traemos los valores que hemos metido en el value del Context
  const { tasks, setTasks } = useContext(TaskContext);

  //Declaramos una variable con useMemo para memoizar cuantas tareas están completadas, esta variable se usa en un <p>
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

    //Declaramos otra variable con useMemo para memoizar cuantas tareas están pendientes, esta variable se usa en un <p>
  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks]
  );
//Memoizamos la función del botón para borrar una tarea. Hemos hemos un .map del array tasks para obtener el index del elemento que queremos borrar, y después hemos sumado los elementos que había antes y los de después del valor eliminado
  const handleDeleteTask = useCallback(() => {
    tasks.map((task, index) => {
      setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    });
  }, [tasks]);

  //hacemos un .map de la lista de tareas. Cuando marcamos el check del input pasamos la tarea seleccionada por su index y cortada con slice. al parametro contrario de Completed y se suma todo
  return (
    <div>
      <h2>Tareas {tasks.length}</h2>
      <p>Completadas: {completedTasks}</p>
      <p>Pendientes:{pendingTasks}</p>
      <ul> 
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                setTasks([
                  ...tasks.slice(0, index),
                  { text: task.text, completed: !task.completed },
                  ...tasks.slice(index + 1),
                ])
              }
            />
            <span
              style={{
                textDecoration: task.completed ? `line-through` : `none`,
              }}
            >
              {task.text}
              <button onClick={handleDeleteTask}>X</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
