import * as GETBooks from "../requests/GETBooks.request";
import * as ObjectSchema from "../schema/schema-get-books.json";

describe("Example testing API with Cypress.", () => {
    it("API - Get /Books - Consutar Livro.", () => {
        GETBooks.allBooks().should((response) => {
            expect(200).to.eq(response.status);
            expect(response.body).to.be.jsonSchema(ObjectSchema);
        })
    });
});