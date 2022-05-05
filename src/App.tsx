import React, { useState } from "react";
// Component
import Input from "./components/Input";
import TodoList from "./components/TodoList";
// Model
import { Todo } from "./model";
// Style
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isComplete: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">ToDo</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
