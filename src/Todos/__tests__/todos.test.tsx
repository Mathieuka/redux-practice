import Todos from "../Todos";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";

describe("Todos", () => {
  test("Add item", () => {
    renderWithProviders(<Todos />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/add/i);
    userEvent.type(input, "foo");
    userEvent.click(addButton);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test("delete item", () => {
    renderWithProviders(<Todos />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/add/i);

    userEvent.type(input, "foo");
    userEvent.click(addButton);
    userEvent.type(input, "baz");
    userEvent.click(addButton);

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();

    const deleteButton = screen.getAllByText(/delete/i);
    userEvent.click(deleteButton[0]);
    expect(screen.queryByText(/foo/i)).not.toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
  });
});
