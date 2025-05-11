// frontend/src/App.js
import './App.css';
import React from 'react';
import TaskList from './pages/taskList';
import TaskForm from './pages/taskForm';

function App() {
  return (
    <div className='app-container'>
      <h1 className='main-head'>Task Management</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
