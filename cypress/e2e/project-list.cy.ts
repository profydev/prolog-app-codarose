import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delayMs: 4000,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // test to see if the loading icon is present before the request resolves
    cy.get('[src*="loading"]').should("exist");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  // check to make sure that the error handling is working
  describe("API error handling", () => {
    it("displays error message on failure to fetch API data", () => {
      // Intercept the API request and return a custom response with a non-200 status code
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 500,
        fixture: "projects.json",
      }).as("getProjectsFailure");

      // Visit the page that makes the API request
      cy.visit("http://localhost:3000/dashboard").wait(15000);

      // Check that the custom error message is displayed before request resolves
      cy.get('[src*="error-icon"]').should("be.visible");
    });
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
        .and("contain", "React")
        .and("contain", "View issues");
      //check to see that the view issues button has the correct route for filtering
      cy.get('[href*="project=Frontend%20-%20Web"]').should("exist");

      cy.get("#project_second")
        .children()
        .should("contain", "25")
        .and("contain", "5")
        .and("contain", "Warning")
        .and("contain", "Backend")
        .and("contain", "Node")
        .and("contain", "View issues");

      //check to see that the view issues button has the correct route for filtering
      cy.get('[href*="project=Backend"]').should("exist");

      cy.get("#project_third")
        .children()
        .should("contain", "0")
        .and("contain", "0")
        .and("contain", "Stable")
        .and("contain", "ML Service")
        .and("contain", "Python")
        .and("contain", "View issues");

      //check to see that the view issues button has the correct route for filtering
      cy.get('[href*="project=ML%20Service"]').should("exist");
    });
  });
});
