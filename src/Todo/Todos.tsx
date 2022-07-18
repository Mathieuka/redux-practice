import style from "./Todos.module.css";
import React from "react";

interface IItem {
  id: string;
  name: string;
  quantity: number;
}

const Item = ({ id, name, quantity }: IItem) => {
  return (
    <div>
      Quantity: {quantity} - {name}
    </div>
  );
};

interface IItemList {
  items: IItem[];
}

const ItemList = ({ items }: IItemList) => {
  return (
    <>
      {items?.map(({ name, quantity, id }) => (
        <div className={style.item}>
          <Item key={id} name={name} quantity={quantity} id={id} /> <div>X</div>
        </div>
      ))}
    </>
  );
};

const Input = () => {
  return (
    <>
      <div className={style.container}>
        <label htmlFor="item-input">Name</label>
        <input type="text" name="item-input" id="item-input" />
        <button>Add</button>
        <ItemList
          items={[
            { id: "1", name: "toto", quantity: 3 },
            { id: "2", name: "toto", quantity: 3 },
          ]}
        />
      </div>
    </>
  );
};

const Todos = () => {
  return (
    <>
      <Input />
    </>
  );
};

export default Todos;
