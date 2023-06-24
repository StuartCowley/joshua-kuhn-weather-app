import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("button exists", () => {
    render(<SearchForm />);
    const searchButton = screen.getByRole("button", { name: /Search/i });

    expect(searchButton).toBeInTheDocument();
  });
});
