import style from "./Todos.module.css";
import React from "react";
import ItemList from "./ItemList";
import Input from "./Input";
import { useAppSelector } from "../redux/hooks";
import { itemsSelector } from "../redux/selectors/todos";

const Todos = () => {
  const items = useAppSelector(itemsSelector);

  return (
    <div className={style.container}>
      <Input items={items} />
      <ItemList items={items} />
    </div>
  );
};

export default Todos;
