import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delayMs: 10000,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // test to see if the loading icon is present before the request resolves

    cy.get('*[class^="project-list__LoadingIcon"]', { timeout: 10000 })
      .should("have.attr", "src")
      .should("include", "loading");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      // see the loading indicator

      cy.get("#project_first")
        .children()
        .should("contain", "73")
        .and("contain", "7")
        .and("contain", "Critical")
        .and("contain", "Frontend - Web Test")
        .and("contain", "React");

      cy.get("#project_second")
        .children()
        .should("contain", "25")
        .and("contain", "5")
        .and("contain", "Warning")
        .and("contain", "Backend")
        .and("contain", "Node");

      cy.get("#project_third")
        .children()
        .should("contain", "0")
        .and("contain", "0")
        .and("contain", "Stable")
        .and("contain", "ML Service")
        .and("contain", "Python");
    });
  });
});
