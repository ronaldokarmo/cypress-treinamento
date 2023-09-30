describe("Example testing E2E with Cypress.", () => {
    it("E2E - Validar fluxo de Compra de Produtos, app Swag Labs.", () => {
        cy.visit("https://www.saucedemo.com");

        /** Validate to login Precondition */
        cy.login_precondition("standard_user", "secret_sauce");

        /** Validate to Order By products by value - smaller for largger */
        cy.get("[data-test='product_sort_container']").select("Price (low to high)");

        /** Validate to Order By products */
        cy.get(':nth-child(1) > .inventory_item_description').should("contain", "Sauce Labs Onesie");
        cy.get(':nth-child(2) > .inventory_item_description').should("contain", "Sauce Labs Bike Light");
        cy.get(':nth-child(3) > .inventory_item_description').should("contain", "Sauce Labs Bolt T-Shirt");

        /** Validate to Add(s) products to cart - first product */
        cy.buy_add_products_cart("Sauce Labs Onesie");

        /** Validate to Add(s) products to cart - secound product */
        cy.buy_add_products_cart("Sauce Labs Bike Light");

        /** Validate to Add(s) products to cart - third product */
        cy.buy_add_products_cart("Sauce Labs Bolt T-Shirt");

        /** Validate to notification cart */
        cy.get(".shopping_cart_link").should("have.text", "3");

        /** Validate to  cart products */
        cy.get(".shopping_cart_link").click();
        cy.url().should("include", "/cart.html");
        cy.buy_verification_products();

        /** Validate to display for checkout */
        cy.get("[data-test='checkout']").click();

        /** Validate to fild data checkout */
        cy.url().should("include", "/checkout-step-one.html");
        cy.get("[data-test='firstName']").type("Jhon").should("have.value", "Jhon");
        cy.get("[data-test='lastName']").type("Cater").should("have.value", "Cater");
        cy.get("[data-test='postalCode']").type("06618010").should("have.value", "06618010");

        /** Validate to Verification Products */
        cy.get("[data-test='continue']").click();
        cy.url().should("include", "/checkout-step-two.html");
        cy.buy_verification_products();

                /** Validate to Payment Information */
        cy.get(".summary_info_label:nth-child(5)").should("have.text", "Price Total");
        cy.get(".summary_subtotal_label").should("have.text", "Item total: $33.97");
        cy.get(".summary_tax_label").should("have.text", "Tax: $2.72");
        cy.get(".summary_info_label.summary_total_label:nth-child(8)").should("have.text", "Total: $36.69");

        /** Validate to finish buy */
        cy.get('[data-test="finish"]').click();
        cy.url().should("include", "/checkout-complete.html");
        cy.get('.complete-header').should("have.text", "Thank you for your order!");
    })

})