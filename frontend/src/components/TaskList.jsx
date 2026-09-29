// Consumo de API
import { useEffect, useState } from "react";
import DeletarTarefa from "./DeleteTask";
import Styles from './TaskList.module.css';

function TaskList() {

    const [tasks, setTasks] = useState([]);

    // Chama a url nativa com o endpoint correto do controller
    useEffect(() => {
        fetch('http://localhost:8081/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);
    
    return (
        <div className={Styles.TaskTableContainer}>
            <table className={Styles.tasksTable}>
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
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => 
                        <tr key={task.id}>        
                            <td>{task.id}</td>
                            <td>{task.nome}</td>
                            <td>{task.descricao}</td>
                            <td>{task.prioridade}</td>
                            <td>
                                <button className={Styles.DeleteButton} onClick={() => DeletarTarefa(task.id)}></button>
                            </td>
                        </tr>        
                    )}
                </tbody>
            </table>
        </div>
        
    );

}

// export de componentes NÃO USA PARÊNTESES!!!
export default TaskList;