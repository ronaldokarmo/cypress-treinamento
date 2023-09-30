import * as DELETEBooks from "../requests/DELETEBooks.request";
import * as GETBooks from "../requests/GETBooks.request";
import * as POSTBooks from "../requests/POSTBooks.request";

describe("Example testing API with Cypress.", () => {
  it("API - Delete /Books - Deletar Livro.", () => {
    GETBooks.allBooks().then((resAllBooks) => {
      DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
        expect(200).to.eq(resDeleteBook.status);
      })
    })
  });

  it("API - Delete /Books - Criar e excluir um livro", () => {
    POSTBooks.addBook().then((resAddBook) => {
      DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
        expect(200).to.eq(resDeleteBook.status)
      })
    })
  });
});