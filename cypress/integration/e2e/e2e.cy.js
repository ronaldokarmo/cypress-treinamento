describe("Example testing API with Cypress.", () => {
  it("E2E - Validar comportamento do campo e-mail no Formulário.", () => {
    cy.visit("/")
    cy.contains("type").click()
    // Should be on a new URL which
    // includes "/commands/actions"
    cy.url().should("include", "/commands/actions")

    // Get an input, type into it
    cy.get(".action-email").type("fake@email.com")

    //  Verify that the value has been updated
    cy.get(".action-email").should("have.value", "fake@email.com")
  })
})