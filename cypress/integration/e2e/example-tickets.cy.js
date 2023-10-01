describe("Tickets", () => {

    beforeEach(() => cy.visit("http://bit.ly/2XSuwCW"))

    it("fill all the text fields", () => {
        const firstName = "Ronaldo"
        const lastName = "do Carmo"

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type("ronaldokarmo@gmail.com")
        cy.get("#requests").type("Tester")
        cy.get("#signature").type(`${firstName} ${lastName}`)
    })

    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2")
    })

    it("Seletc 'vip' ticket type", () => {
        cy.get("#vip").check()
    })

    it("select 'social media' checkbox", () => {
        cy.get("#social-media").check()
    })

    it("selects 'frined' and 'publication' then unckeck 'friend'", () => {
        cy.get("#friend").check()
        cy.get("#publication").check()
        cy.get("#friend").uncheck()
    })

    it("Visit the site Ticket-box ", () => {
        cy.get("header h1").should("contain", "TICKETBOX")
    })

    it("alerts on invalid email", () => {
        cy.get("#email.required")
            .as("email")
            .type("ronaldokarmo-gmail.com")

        cy.get("#email.invalid")
            .should("exist")

        cy.get("@email")
            .clear()
            .type("ronaldokarmo@gmail.com")


        cy.get("#email.invalid").should("not.exist")
    })

    it("illss and reset the form", () => {
        const firstName = "Ronaldo"
        const lastName = "do Carmo"
        const fullName = `${firstName} ${lastName}`

        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#email").type("ronaldokarmo@gmail.com")
        cy.get("#ticket-quantity").select("2")
        cy.get("#vip").check()
        cy.get("#friend").check()
        cy.get("#requests").type("IPA beer")

        cy.get(".agreement p").should("contain", `I, ${fullName}, wish to buy 2 VIP tickets.`)

        cy.get("#agree").click()
        cy.get("#signature").type(fullName)

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled")

        cy.get("button[type='reset']").click()

        cy.get("@submitButton").should("be.disabled")
    })

    it("fills mandatory fields using support command", () => {
        const customer = {
            firstName: "João",
            lastName: "silva",
            email:"joaosilva@example.com"
        }

        cy.fillMandatoryFields(customer)

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled")

        cy.get("#agree").uncheck()

        cy.get("@submitButton").should("be.disabled")
    })
})