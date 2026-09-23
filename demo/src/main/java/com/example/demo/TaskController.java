package com.example.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @CrossOrigin 
    @GetMapping 
    public List<String> listarTasks() {
        return Arrays.asList("Tarefa 1", "Tarefa 2", "Tarefa 3");
    }

}
