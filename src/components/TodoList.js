import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className='flex items-center justify-center'>
      <ul className='mt-8 '>
      {todos.map((todo) => (
        <li key={todo.id} className='bg-red-400 rounded-lg p-2 w-80 shadow-md mb-2 flex items-center justify-between' >
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            className="font-semibold text-2xl"
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} className="text-black text-2xl ml-4 hover:text-red-500">❌</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
