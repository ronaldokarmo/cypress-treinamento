Cypress.Commands.add("login_validate", (user, password) => {
    cy.visit("https://www.saucedemo.com");
    cy.get("[data-test='username']").type(user).should("have.value", user);
    cy.get("[data-test='password']").type(password).should("have.value", password);
    cy.get("[data-test='login-button']").click();
})

Cypress.Commands.add("login_precondition", (user, password) => {
    cy.visit("https://www.saucedemo.com");
    cy.get("[data-test='username']").type(user).should("have.value", user);
    cy.get("[data-test='password']").type(password).should("have.value", password);
    cy.get("[data-test='login-button']").click();
    cy.url().should("include", "/inventory.html")
    cy.get(".title").should("contain", "Products");
})