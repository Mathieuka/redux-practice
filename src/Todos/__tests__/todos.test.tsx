import Todos from "../Todos";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";

describe("Todos", () => {
  test("Add Item", () => {
    renderWithProviders(<Todos />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/add/i);
    userEvent.type(input, "foo");
    userEvent.click(addButton);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
});
