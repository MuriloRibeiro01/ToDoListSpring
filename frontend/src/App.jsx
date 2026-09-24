import { useEffect, useState, View } from 'react';

import './App.css';
import TaskList from './pages/TaskList';

function App() {
  
  const [tarefas, setTarefas] = useState([]);  
    
  return (

    <View>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </View>    

  );
}

export default App
