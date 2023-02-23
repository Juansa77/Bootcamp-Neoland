import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");
  const handleOnchange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTodo(userInput);
      setUserInput("");
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleOnchange} />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
