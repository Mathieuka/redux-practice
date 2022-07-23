import Item, { IItem } from "./Item";
import style from "./Todos.module.css";
import React from "react";

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

export default ItemList;
