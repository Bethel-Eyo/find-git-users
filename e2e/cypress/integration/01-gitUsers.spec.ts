/* eslint-disable jest/valid-expect-in-promise */

describe("Search for Git Users", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Searched Users rendered properly", () => {
    cy.get("input#username").type("bethel");
    cy.intercept({
      method: "GET", // Route all GET requests
      url: "/search/*", // that have a URL that matches '/search/*'
    }).as("getUsers");

    cy.wait("@getUsers").then((res) => {
      // eslint-disable-next-line cypress/no-assigning-return-values
      const root = cy.get("[data-testid=root]");

      root.find("[data-testid=list-item]").then((users) => {
        expect(users).length.greaterThan(1);
      });
    });
  });
});
