# ToDoList Spring + React

Aplicação simples de lista de tarefas (to-do list) com backend em **Spring Boot** e frontend em **React**.

## Sobre o projeto

Este projeto foi criado para **treino, estudos e prática**. O objetivo não é entregar um produto final, mas aprender na prática como funciona uma aplicação full stack: da criação de uma API REST em Java até o consumo dessa API em uma interface React.

Por isso, o código traz comentários de aprendizado e algumas soluções simples, escolhidas para entender cada conceito antes de partir para abordagens mais elaboradas.

## Funcionalidades

- Cadastrar tarefas com nome, descrição e prioridade (`BAIXA`, `MEDIA`, `ALTA`)
- Listar as tarefas em uma tabela
- Editar uma tarefa por meio de um modal
- Excluir tarefas

## Tecnologias

| Camada   | Tecnologias |
|----------|-------------|
| Backend  | Java 17, Spring Boot 4, Spring Web MVC, Spring Data JPA, H2 Database, Gradle |
| Frontend | React 19, Vite, Material UI (MUI), CSS Modules, ESLint |
| Testes   | JUnit 5, MockMvc, RestTestClient |

## Conceitos explorados

### Backend (Spring Boot)

- **Estrutura de uma aplicação Spring Boot**: o papel do `@SpringBootApplication` como ponto de partida da aplicação.
- **Beans e container de IoC**: o que é um `@Bean` e como o Spring cria e gerencia objetos (o `CommandLineRunner` em [DemoApplication.java](demo/src/main/java/com/example/DemoApplication.java) lista todos os beans carregados).
- **Injeção de dependência** com `@Autowired`.
- **API REST** com `@RestController` e `@RequestMapping`, usando os verbos HTTP:
  - `GET /api/tasks`: lista todas as tarefas
  - `GET /api/tasks/{id}`: busca uma tarefa pelo id
  - `POST /api/tasks`: cria uma tarefa
  - `PUT /api/tasks/{id}`: atualiza uma tarefa
  - `DELETE /api/tasks/{id}`: remove uma tarefa
- **Mapeamento de parâmetros** com `@PathVariable` e `@RequestBody` (JSON ↔ objeto Java).
- **JPA / ORM**: entidade com `@Entity`, chave primária com `@Id` e geração automática com `@GeneratedValue`.
- **Spring Data JPA**: repositório com `JpaRepository`, que já fornece o CRUD sem escrever SQL.
- **Enums** para representar valores fixos (`Prioridade`).
- **Encapsulamento** com getters e setters.
- **Tratamento de ausência de dados** com `Optional` (`findById(...).orElseThrow(...)`).
- **Banco de dados em memória (H2)** e configuração via `application.properties`, incluindo o console do H2.
- **CORS**: liberar o acesso do frontend (`localhost:5173`) à API, tanto de forma global (`WebMvcConfigurer`) quanto por controller (`@CrossOrigin`).
- **Testes**: teste de contexto com `@SpringBootTest`, testes de controller com `MockMvc` e testes de integração com `RestTestClient` em porta aleatória.

### Frontend (React)

- **Componentização**: separar a interface em componentes reutilizáveis (`CreateTask`, `TaskList`, `MyButton`...).
- **Hooks**:
  - `useState` para controlar o estado dos formulários, da lista e da exibição do modal
  - `useEffect` para buscar as tarefas quando o componente é montado
- **Consumo de API** com `fetch` e `async/await` para os métodos `GET`, `POST`, `PUT` e `DELETE`.
- **Formulários controlados**: inputs ligados ao estado, com um único `handleChange` usando o atributo `name` e o spread operator (`...tarefa`).
- **Renderização condicional** (`mostrarForm && ...`) para abrir e fechar o modal de edição.
- **Renderização de listas** com `.map()` e o uso da prop `key`.
- **Props** e `children` em componentes.
- **Biblioteca de componentes**: uso do `Autocomplete` e do `TextField` do Material UI.
- **Estilização com CSS Modules** (`*.module.css`), evitando conflito de nomes de classes.
- **Tooling**: projeto criado com Vite e analisado com ESLint.

### Boas práticas e organização

- **Separação entre backend e frontend** em pastas independentes (`demo/` e `frontend/`).
- **Organização por funcionalidade** no backend (pacote `task` reunindo entidade, enum, repositório e controller).
- **Commits semânticos** seguindo o padrão Conventional Commits (`feat:`, `refactor:`, `style:`, `docs:`...).

## Estrutura do projeto

```
ToDoListSpring/
├── demo/                         # Backend Spring Boot
│   └── src/main/java/com/example/
│       ├── DemoApplication.java  # Ponto de entrada
│       ├── api/
│       │   └── CorsConfiguration.java
│       └── task/
│           ├── Task.java         # Entidade JPA
│           ├── Prioridade.java   # Enum de prioridade
│           ├── TaskRepository.java
│           └── TaskController.java
└── frontend/                     # Frontend React + Vite
    └── src/
        ├── App.jsx
        ├── components/           # CreateTask, TaskList, DeleteTask...
        └── pages/
```

## Como executar

### Pré-requisitos

- Java 17
- Node.js e npm

### Backend

```bash
cd demo
./gradlew bootRun
```

A API fica disponível em `http://localhost:8081/api/tasks`.
O console do H2 pode ser acessado em `http://localhost:8081/h2-console` (JDBC URL: `jdbc:h2:mem:test`).

> Como o banco é em memória, os dados são perdidos ao reiniciar o backend.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

## Próximos passos de estudo

Ideias para continuar evoluindo o projeto:

- Atualizar a lista sem recarregar a página (atualizando o estado em vez de usar `window.location.reload`)
- Criar uma camada de **Service** entre o controller e o repositório
- Usar **DTOs** e **Bean Validation** (`@Valid`, `@NotBlank`)
- Tratar erros com `@ControllerAdvice` e retornar status HTTP adequados (ex.: 404)
- Escrever testes para os endpoints de tarefas (os testes atuais ainda são do "Hello" inicial)
- Centralizar a URL da API no frontend em uma variável de ambiente
- Usar o React Router (já instalado) para navegação entre páginas
- Trocar o H2 por um banco persistente, como PostgreSQL
