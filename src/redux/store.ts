import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./features/todos/todosSlice";

export default configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});
