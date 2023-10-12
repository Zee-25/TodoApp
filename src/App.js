import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import DateTime from './components/DateTime';

function App() {
  return (
    <div className="todo-app">
      <DateTime />
      <TodoList />
    </div>
  );
}

export default App;
