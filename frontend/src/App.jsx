import { useEffect, useState, View, Button } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import MyButton from './components/MyButton';
import CreateTask from './components/CreateTask';

function App() {

  function alertar() {
    alert('oiee');
  }
    
  return (

    <div>
      <p>oiee</p>
      <MyButton onClick={alertar}>oiee</MyButton>
      <CreateTask />
      <TaskList></TaskList>
    </div>
    
  );
}

export default App
