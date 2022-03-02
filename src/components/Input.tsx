import React from "react";
// Styles
import "./styles.css";

const Input = () => {
  return (
    <form action="" className="input">
      <input className="input-box" type="input" placeholder="Enter a task" />
      <button className="input-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default Input;
