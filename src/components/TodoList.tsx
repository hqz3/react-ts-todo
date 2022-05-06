import React from "react";
// Component
import TodoSingle from "./TodoSingle";
// Model
import { Todo, Actions } from "../model";
// Style
import "./styles.css";

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodoList = ({ todos, dispatch }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoSingle
          key={todo.id}
          todo={todo}
          todos={todos}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;
