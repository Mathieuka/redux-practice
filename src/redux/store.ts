import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./features/todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
