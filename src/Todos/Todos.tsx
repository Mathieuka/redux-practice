import style from "./Todos.module.css";
import React from "react";
import ItemList from "./ItemList";
import Input from "./Input";
import { useSelector } from "react-redux";

const Todos = () => {
  const items = useSelector((state: any) => state.todos.items);

  return (
    <div className={style.container}>
      <Input items={items} />
      <ItemList items={items} />
    </div>
  );
};

export default Todos;
