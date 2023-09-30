import * as POSTBooks from "../requests/POSTBooks.request";
import * as ObjectSchema from "../schema/schema-post-books.json";

describe("Example testing API with Cypress.", () => {
  it("API - Post /Books - Adicionar Livro.", () => {
    POSTBooks.addBook().should((response) => {
      expect(200).to.eq(response.status);
      expect("Livro").to.eq(response.body.title);
      expect(response.body).to.be.jsonSchema(ObjectSchema);
    })
  });
});