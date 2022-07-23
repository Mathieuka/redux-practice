import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state: any, { payload }) => {
      state.items = [...state.items, payload];
    },
  },
});

export const { add } = todosSlice.actions;

export default todosSlice.reducer;
