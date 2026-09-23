import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [tarefas, setTarefas] = useState([]);

    // Chama a url nativa com o endpoint correto do controller
    try {
      useEffect(() => {
          fetch('http://localhost:8081/api/tasks')
              .then(response => response.json([]))
              .then(data => setTarefas(data));
      }, []);
      
    } catch (e) {
      console.error("Não deu pra buscar as parada, pai.");
    }
    
    
    return (

        <ul>
            {tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
            ))}
        </ul>       

    );
}

export default App
