package com.example.task;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired 
    private TaskRepository taskRepository;

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }    

    @GetMapping 
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/api/tasks/{id}")
    public Task getTaskById(@PathVariable Long id) {
        // Acha aquela tarefa ou joga um erro
        return taskRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Tarefa não encontrada."));
    }

    // taskDetails é um objeto que guarda o json de retorno.
    @PutMapping("/api/tasks/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        
        Task task = taskRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        // Getters e Setters
        task.setName(taskDetails.getName());
        task.setDescricao(taskDetails.getDescricao());
        task.setPrioridade(taskDetails.getPrioridade());

        return taskRepository.save(task);
        
    }

    @DeleteMapping("/api/tasks/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }

}
