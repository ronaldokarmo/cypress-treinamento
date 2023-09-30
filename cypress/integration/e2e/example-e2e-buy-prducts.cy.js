describe("Example testing E2E with Cypress.", () => {
    it("E2E - Validar fluxo de Compra de Produtos, app Swag Labs.", () => {
        cy.visit("https://www.saucedemo.com");

        /** Validate to fil data login */
        cy.get("[data-test='username']").type("standard_user").should("have.value", "standard_user");
        cy.get("[data-test='password']").type("secret_sauce").should("have.value", "secret_sauce");
        cy.get("[data-test='login-button']").click();

        /** Validate to Login success */
        cy.url().should("include", "/inventory.html")
        cy.get(".title").should("contain", "Products");

        /** Validate to Order By products by value - smaller for largger */
        cy.get("[data-test='product_sort_container']").select("Price (low to high)");

        /** Validate to Order By products */
        cy.get(':nth-child(1) > .inventory_item_description').should("contain", "Sauce Labs Onesie");
        cy.get(':nth-child(2) > .inventory_item_description').should("contain", "Sauce Labs Bike Light");
        cy.get(':nth-child(3) > .inventory_item_description').should("contain", "Sauce Labs Bolt T-Shirt");

        /** Validate to Add(s) products to cart - first product */
        cy.contains("Sauce Labs Onesie").click();
        cy.get(".btn_primary").click();
        cy.get("[data-test='back-to-products']").click();

        /** Validate to Add(s) products to cart - secound product */
        cy.contains("Sauce Labs Bike Light").click();
        cy.get(".btn_primary").click();
        cy.get("[data-test='back-to-products']").click();

        /** Validate to Add(s) products to cart - third product */
        cy.contains("Sauce Labs Bolt T-Shirt").click();
        cy.get(".btn_primary").click();
        cy.get("[data-test='back-to-products']").click();

        /** Validate to notification cart */
        cy.get(".shopping_cart_link").should("have.text", "3");

        /** Validate to  cart products */
        cy.get(".shopping_cart_link").click();
        cy.url().should("include", "/cart.html");
        cy.get(".cart_list > :nth-child(3)").should("contain", "Sauce Labs Onesie");
        cy.get(".cart_list > :nth-child(4)").should("contain", "Sauce Labs Bike Light");
        cy.get(".cart_list > :nth-child(5)").should("contain", "Sauce Labs Bolt T-Shirt");

        /** Validate to display for checkout */
        cy.get("[data-test='checkout']").click();

        /** Validate to fild data checkout */
        cy.url().should("include", "/checkout-step-one.html");
        cy.get("[data-test='firstName']").type("Jhon").should("have.value", "Jhon");;
        cy.get("[data-test='lastName']").type("Cater").should("have.value", "Cater");;
        cy.get("[data-test='postalCode']").type("06618010").should("have.value", "06618010");;

        /** Validate to Payment Information */
        cy.get("[data-test='continue']").click();
        cy.url().should("include", "/checkout-step-two.html");
        cy.get(".summary_info_label:nth-child(5)").should("contain", "Price Total");
        cy.get(".summary_subtotal_label").should("contain", "$33.97");
        cy.get(".summary_tax_label").should("contain", "$2.72");
        cy.get(".summary_info_label.summary_total_label:nth-child(8)").should("contain", "$36.69");

        /** Validate to Payment and finesh buy */
        cy.get('[data-test="finish"]').click();
        cy.url().should("include", "/checkout-complete.html");
        cy.get('.complete-header').should("contain", "Thank you for your order!");
    })

})