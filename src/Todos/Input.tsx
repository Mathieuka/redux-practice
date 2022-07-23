import style from "./Todos.module.css";
import React from "react";

const Input = () => {
  return (
    <div className={style.container}>
      <label htmlFor="item-input">Name</label>
      <input type="text" name="item-input" id="item-input" />
      <button>Add</button>
    </div>
  );
};

export default Input;
