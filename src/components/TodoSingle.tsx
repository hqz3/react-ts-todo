import React, { useState, useRef, useEffect } from "react";
// Model
import { Todo, Actions } from "../model";
// React Icon
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
// Style
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodoSingle = ({ todo, todos, dispatch }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "update", payload: editTodo, id });
    setEdit(false);
  };

  useEffect(() => {
    if (edit) {
      formRef.current?.classList.add("highlightTodo");
      inputRef.current?.classList.add("highlightTodo");
      inputRef.current?.focus();
    } else {
      formRef.current?.classList.remove("highlightTodo");
      inputRef.current?.classList.remove("highlightTodo");
    }
  }, [edit]);

  return (
    <form
      className="todo-single"
      ref={formRef}
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          className="todo-single-text"
          value={editTodo}
          ref={inputRef}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
        ></input>
      ) : todo.isComplete ? (
        <s className="todo-single-text">{todo.todo}</s>
      ) : (
        <span className="todo-single-text">{todo.todo}</span>
      )}
      <div className="icons">
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isComplete) {
                setEdit(true);
                setEditTodo(todo.todo);
              } else setEdit(false);
            }}
          />
        </span>
        <span className="icon">
          <AiFillDelete
            onClick={() => dispatch({ type: "remove", payload: todo.id })}
          />
        </span>
        <span
          className="icon"
          onClick={() => dispatch({ type: "complete", payload: todo.id })}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoSingle;
