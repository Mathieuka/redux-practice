import React from "react";

export interface IItem {
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

export default Item;
