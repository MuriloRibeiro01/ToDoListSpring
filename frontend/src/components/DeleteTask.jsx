async function DeletarTarefa(id) {

    try {
        await fetch(`http://localhost:8081/api/tasks/${id}`, {
            method: 'DELETE',
        });
    } catch (e) {
        console.error("Erro ao deletar tarefa", e);
    }    

}

export default DeletarTarefa;