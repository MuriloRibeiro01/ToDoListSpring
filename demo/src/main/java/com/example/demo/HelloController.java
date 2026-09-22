package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// isso é uma flag "@BlaBla", significa que o spring pode usar isso para fazer requisições web.
@RestController 
public class HelloController {
    
    // Isso aqui só mapeia a rota que o método vai atuar.
    @GetMapping("/hello")
    public String index() {
        return "Salve zé!";
    }

}
