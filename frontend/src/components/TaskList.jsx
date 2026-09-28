// Consumo de API
import { useEffect, useState } from "react";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    // Chama a url nativa com o endpoint correto do controller
    useEffect(() => {
        fetch('http://localhost:8081/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);   

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Código
                    </th>
                    <th>
                        Tarefa
                    </th>
                    <th>
                        Descrição
                    </th>
                    <th>
                        Prioridade
                    </th>
                </tr>
            </thead>
                        
            {tasks.map((task) => 
                <tr>        
                    <td>{task.id}</td>
                    <td>{task.nome}</td>
                    <td>{task.descricao}</td>
                    <td>{task.prioridade}</td>
                </tr>        
            )}
            
        </table>
    );

}

// export de componentes NÃO USA PARÊNTESES!!!
export default TaskList;