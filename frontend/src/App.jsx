import { useEffect, useState, View, Button } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import Styles from './App.module.css';

function App() {
    
  return (

    <div className={Styles.AppContainer}>
      <CreateTask />
      <TaskList></TaskList>
    </div>
    
  );
}

export default App
