
describe("Example testing E2E with Cypress.", () => {
  it("E2E - Validar Login com Sucesso, app Swag Labs.", () => {
    cy.login_validate("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html")
    cy.get(".title").should("contain", "Products");
  })

  it("E2E - Validar Login com Usuário Inválido, app Swag Labs.", () => {
    cy.login_validate("standard_users", "secret_sauce");
    cy.get("[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
  })

  it("E2E - Validar Login com Senha Inválida, app Swag Labs.", () => {
    cy.login_validate("standard_user", "secret_sauces");
    cy.get("[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
  })
})