// Consumo de API
import { useEffect, useState } from "react";

function TaskList() {

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
        <table>
            <thead>
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
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.descricao}</td>
                        <td>{task.Prioridade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default TaskList();