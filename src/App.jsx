import "./App.css";
import { useState } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("New todo");

  const todos = [
    { id: 1, title: "Reveiw resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />

      <p>{newTodo}</p>

      <TodoList />
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>{todos.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
