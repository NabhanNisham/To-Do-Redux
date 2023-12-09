import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold text-orange-500 p-8'>TO-DO-LIST</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
