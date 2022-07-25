import { createSelector } from "reselect";
import { RootState } from "../store";

const todosSelector = (state: RootState) => state.todos;

export const itemsSelector = createSelector(
  todosSelector,
  ({ items }) => items
);
