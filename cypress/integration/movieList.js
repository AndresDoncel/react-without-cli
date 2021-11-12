import { mount } from "@cypress/react"; // or @cypress/vue
import { ListMovies } from "../../src/components/ListMovies";

describe("List Movies component", () => {
  it("it shows a list of movies", () => {
    const fakeResponse = [
      { id: 1, title: "John Doe" },
      { id: 2, title: "Kevin Mitnick" },
    ];

    cy.stub(window, "fetch").resolves({
      json: () => Promise.resolve(fakeResponse),
    });

    mount(<ListMovies />);
    cy.get(".container__movies").should("have.length", 2);
    cy.contains("div", "John Doe");
    cy.contains("div", "Kevin Mitnick");
  });
});
