import React from "react";
import style from "./Todos.module.css";
import Item, { IItem } from "./Item";
import { deleteItem } from "../redux/features/todos/todosSlice";
import { useAppDispatch } from "../redux/hooks";

interface IItemList {
  items: IItem[];
}

const ItemList = ({ items }: IItemList) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = (id: string) => () => {
    dispatch(deleteItem({ id }));
  };

  return (
    <>
      {items?.map(({ name, quantity, id }) => (
        <div key={id} className={style.item}>
          <Item name={name} quantity={quantity} id={id} />{" "}
          <button onClick={handleDeleteItem(id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default ItemList;
