import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { expect, test, vi, within } from "vitest";
import SchoolSearchPage from "./SchoolSearchPage";

//What are we testing for?
//Does Loader provide the data we require?
//Can the user see 4 schools by name?
//Are there 4 cards?
//Do they have content?

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLoaderData: () => ({
      featuredSchools: [
        { _id: "1", name: "School One" },
        { _id: "2", name: "School Two" },
        { _id: "3", name: "School Three" },
        { _id: "4", name: "School Four" },
      ],
    }),
  };
});

test("loader provides four schools", () => {
  render(
    <MemoryRouter>
      <SchoolSearchPage />
    </MemoryRouter>,
  );

  expect(screen.getByText("School One")).toBeInTheDocument();
  expect(screen.getByText("School Two")).toBeInTheDocument();
  expect(screen.getByText("School Three")).toBeInTheDocument();
  expect(screen.getByText("School Four")).toBeInTheDocument();

  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(4);

  cards.forEach((card) => {
    expect(within(card).getByRole("heading")).toBeInTheDocument();
  });
});
