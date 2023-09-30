const payloadAddBook = require("../payloads/add-book.json")

function addBook() {
  return cy.request({
    method: "POST",
    url: "https://fakerestapi.azurewebsites.net/api/v1/Books",
    failOnStatusCode: false,
    body: payloadAddBook
  })
}

export { addBook };