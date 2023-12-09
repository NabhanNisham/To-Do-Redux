import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../actions";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {

  const handleEdit = (id, text) => {
    const newEditText = prompt("Enter the new text:", text);
    if (newEditText !== null && newEditText.trim() !== "") {
      editTodo(id, newEditText);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <ul className="mt-8">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-red-400 rounded-lg p-2 w-80 shadow-md mb-2 flex items-center justify-between"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="hidden mr-2"
              />
              <div
                className={`w-4 h-4 border-2 border-black rounded ${
                  todo.completed ? 'bg-black' : 'bg-white'
                }`}
                onClick={() => toggleTodo(todo.id)}
              ></div>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="font-semibold text-xl ml-2"
            >
              {todo.text}
            </span>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleEdit(todo.id, todo.text)} >🖋️</button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-black text-2xl mr-2 hover:text-red-500"
              >
                🗑️
              </button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { toggleTodo, deleteTodo, editTodo })(
  TodoList
);
