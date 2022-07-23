import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./features/todos/todosSlice";

const setupStore = () =>
  configureStore({
    reducer: {
      todos: todoSliceReducer,
    },
  });

const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof setupStore>;

export default store;
