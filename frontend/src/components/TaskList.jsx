// Consumo de API
import { useEffect, useState } from "react";
import DeletarTarefa from "./DeleteTask";
import ListStyles from './TaskList.module.css';
import EditStyles from './EditTask.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [mostrarForm, setMostrarForm] = useState(false);

    const [prioridade, setPrioridade] = useState(null);

    const [tarefa, setTarefa] = useState({
        nome: '',
        descricao: '',
    })

    // Chama a url nativa com o endpoint correto do controller
    useEffect(() => {
        fetch('http://localhost:8081/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const abrirEditForm = async (task) => {
        setTarefa(task);
        setMostrarForm(true);
    }

    const enviarTask = async (e) => {
        
        e.preventDefault();

        const response = await fetch(`http://localhost:8081/api/tasks/${tarefa.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tarefa),
        });

        if (response.ok) {
            setMostrarForm(false);
            window.location.reload(true);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setTarefa({
            ...tarefa,
            [name]: value,
        });   
    }

    const handlePrioridade = (event, newValue) => {
        setTarefa({
            ...tarefa,
            prioridade: newValue,
        });
    }
    
    return (
        <div className={ListStyles.TaskTableContainer}>

            {mostrarForm && (
                <div className={EditStyles.formContainer}>
                    <form onSubmit={enviarTask}>
                        <div className={EditStyles.cabecalho}>
                            <h2>Editar tarefa</h2>
                            <button className={EditStyles.closeButton} type="button" onClick={() => setMostrarForm(false)}>X</button>
                        </div>
                        

                        <div className={EditStyles.interiorContainer}>
                            <input className={EditStyles.inputStyle} type="text" value={tarefa.nome} onChange={handleChange} name='nome' placeholder="Nome" />
                            <input className={EditStyles.inputStyle} type="text" value={tarefa.descricao} onChange={handleChange} name='descricao' placeholder="Descrição" />
                            <Autocomplete 
                                className={EditStyles.inputStyle}
                                value={tarefa.prioridade}
                                onChange={handlePrioridade}
                                options={["ALTA", "MEDIA", "BAIXA"]}
                                renderInput={(prioridade) => 
                                    <TextField {...prioridade} label="Prioridade" variant="outlined"/>
                                }
                            />  
                        </div>
                        <button className={EditStyles.salvarButton} type='submit'>Salvar</button>
                        
                    </form>
                </div>
            )}

            <table className={ListStyles.tasksTable}>
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
                                <button className={ListStyles.DeleteButton} onClick={() => DeletarTarefa(task.id)}></button>
                                <button className={EditStyles.EditButton} onClick={() => abrirEditForm(task)}></button>
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