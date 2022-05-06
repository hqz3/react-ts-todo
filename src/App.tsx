import React, { useState, useReducer } from "react";
// Component
import Input from "./components/Input";
import TodoList from "./components/TodoList";
// Model
import { TodoReducer } from "./model";
// Style
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div className="App">
      <span className="heading">ToDo</span>
      <Input todo={todo} setTodo={setTodo} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
