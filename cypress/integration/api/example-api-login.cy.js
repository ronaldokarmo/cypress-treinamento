describe("Example testing API with Cypress.", () => {

    it("API - Post /login - Login com sucesso, app ServeRest.", () => {
        cy.api({
            method: "POST",
            url: "/login",
            failOnStatusCode: false,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        }).then((respose) => {
            expect(200).to.equal(respose.status);
            expect("Login realizado com sucesso").to.equal(respose.body.message);
            expect(respose.body.authorization).to.exist;
        })
    });

    it("API - Post /login - Login com Senha Invalida, app ServeRest.", () => {
        cy.api({
            method: "POST",
            url: "/login",
            failOnStatusCode: false,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: {
                "email": "fulano@qa.com",
                "password": "senhaInvalida"
            }
        }).then((respose) => {
            expect(401).to.equal(respose.status);
            expect("Email e/ou senha inválidos").to.equal(respose.body.message);
        })
    });

    it("API - Get /Usuarios - Listar todos os Usuários, app ServeRest.", () => {
        cy.api({
            method: "GET",
            url: "/usuarios",
            failOnStatusCode: false,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((respose) => {

            if (respose.status == 200) {
                cy.log("Api return Successful responses 2XX.");
                //expect("Ricardowisk").to.equal(respose.body.usuarios[0].nome);
                expect(respose.body.usuarios[0].nome).to.exist;
                expect(respose.body.usuarios[0].email).to.exist;
                expect(respose.body.usuarios[0].password).to.exist;
                expect(respose.body.usuarios[0].administrador).to.exist;
                expect(respose.body.usuarios[0]._id).to.exist;
            }
            else if (respose.status == 400) {
                cy.log("Api return Client error responses 4XX.");
            }
            else {
                cy.log("Api return Server error responses 5XX.");
            }
        })
    });

});