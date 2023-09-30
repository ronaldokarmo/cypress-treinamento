Cypress.Commands.add("buy_add_products_cart", (product) => {
    cy.contains(product).click();
    cy.get(".btn_primary").click();
    cy.get("[data-test='back-to-products']").click();
})

Cypress.Commands.add("buy_verification_products", () => {
    cy.get(".cart_list > :nth-child(3)").should("contain", "Sauce Labs Onesie");
    cy.get(".cart_list > :nth-child(4)").should("contain", "Sauce Labs Bike Light");
    cy.get(".cart_list > :nth-child(5)").should("contain", "Sauce Labs Bolt T-Shirt");
})