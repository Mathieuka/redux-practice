import style from "./Todos.module.css";
import React from "react";
import ItemList from "./ItemList";
import Input from "./Input";

const Todos = () => {
  return (
    <div className={style.container}>
      <Input />
      <ItemList
        items={[
          { id: "1", name: "toto", quantity: 3 },
          { id: "2", name: "toto", quantity: 3 },
        ]}
      />
    </div>
  );
};

export default Todos;
