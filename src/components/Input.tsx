import React, { useRef } from "react";
// Model
import { Actions } from "../model";
// Style
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<Actions>;
}

const Input = ({ todo, setTodo, dispatch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add", payload: todo });
        inputRef.current?.blur();
        setTodo("");
      }}
    >
      <input
        className="input-box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.currentTarget.value)}
        ref={inputRef}
      />
      <button className="input-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default Input;
