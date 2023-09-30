
describe("Example testing E2E with Cypress.", () => {
  it("E2E - Validar Login com Sucesso, app Swag Labs.", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("[data-test='username']").type("standard_user").should("have.value", "standard_user");
    cy.get("[data-test='password']").type("secret_sauce").should("have.value", "secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.url().should("include", "/inventory.html")
    cy.get(".title").should("contain", "Products");
  })

  it("E2E - Validar Login com Usuário Inválido, app Swag Labs.", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("[data-test='username']").type("standard_users").should("have.value", "standard_users");
    cy.get("[data-test='password']").type("secret_sauce").should("have.value", "secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
  })

  it("E2E - Validar Login com Senha Inválida, app Swag Labs.", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("[data-test='username']").type("standard_user").should("have.value", "standard_user");
    cy.get("[data-test='password']").type("secret_sauces").should("have.value", "secret_sauces");
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
  })
})