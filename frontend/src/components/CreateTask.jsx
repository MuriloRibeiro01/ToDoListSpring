import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

function CreateTask({  }) {

    const [tarefa, setTarefa] = useState({
        name: '',
        descricao: '',
    })

    const [prioridade, setPrioridade] = useState(null);

    const enviarTask = async (e) => {

        try {

            const response = await fetch('http://localhost:8081/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tarefa),
            });

            if (response.ok) {
                const dados = await response.json();
                return dados;
            }

        } catch (e) {
            console.error("Não deu pra buscar as parada.")
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
        <form onSubmit={enviarTask}>
            <h1>Adicionar tarefa</h1>

            <input type="text" value={tarefa.nome} onChange={handleChange} name='nome' placeholder="Nome" />
            <input type="text" value={tarefa.descricao} onChange={handleChange} name='descricao' placeholder="Descrição" />
            <Autocomplete 
                value={prioridade}
                onChange={handlePrioridade}
                options={["ALTA", "MEDIA", "BAIXA"]}
                renderInput={(prioridade) => 
                    <TextField {...prioridade} label="Prioridade" variant="outlined"/>
                }
            />  
            <button type='submit'>Adicionar</button>

        </form>
    )

}

export default CreateTask;