import { useEffect, useState, View, Button } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import MyButton from './components/MyButton';
import CreateTask from './components/CreateTask';

function App() {
    
  return (

    <div>
      <CreateTask />
      <TaskList></TaskList>
    </div>
    
  );
}

export default App
