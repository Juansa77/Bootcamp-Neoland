import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "./data/data.json";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  //Para eliminar, filtra los IDs y solo deja dentro los que no tengan la ID que hemos recibido al pulsar
  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), task: newTodo, completed: false };
    setTodos([...todos, newItem]);
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
