import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../../Todos/Item";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state: { items: IItem[] }, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteItem: (state: { items: IItem[] }, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { add, deleteItem } = todosSlice.actions;

export default todosSlice.reducer;
