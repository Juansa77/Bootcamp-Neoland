import React from "react";
import "./todoItem.css";

const TodoItem = ({ todo, onComplete, onDeleteItem }) => {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? `line-through` : `none`,
      margin: `20px`,
      border: `1px solid blue`,
      backgroundcolor: `ffffff`,
    };
  };

  return (
    <div className="todoItem" style={getStyle()}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      {todo.task}
      <button className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
