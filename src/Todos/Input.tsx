import style from "./Todos.module.css";
import React, { useState } from "react";
import { add } from "../redux/features/todos/todosSlice";
import { useDispatch } from "react-redux";

interface IInput {
  items: any[];
}

const Input = ({ items }: IInput) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    const itemExist = items.find((item) => item.name === name);
    if (name && !itemExist) {
      dispatch(add({ id: name, name, quantity: 1 }));
      setName("");
    }
  };

  return (
    <div className={style.container}>
      <label htmlFor="item-input">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="item-input"
        id="item-input"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default Input;
