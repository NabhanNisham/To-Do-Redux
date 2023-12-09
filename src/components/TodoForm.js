import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className='flex justify-center items-center mt-28 mb-4'>
      <form onSubmit={handleSubmit} className='bg-rose-300 w-96 h-40 p-8 shadow-md '>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full rounded-lg pl-4 p-2 border-2 border-rose-500 focus:outline-none focus:border-rose-900'
      />
      <button type="submit" className='mt-4 w-full bg-rose-600 text-white rounded-lg p-2 font-medium hover:bg-rose-700 transition duration-300'>Add Todo</button>
    </form>
    </div>
  );
};

export default connect(null, { addTodo })(TodoForm);
