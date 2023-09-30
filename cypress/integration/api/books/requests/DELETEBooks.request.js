function deleteBook(idBook) {
    return cy.request({
      method: "DELETE",
      url: `https://fakerestapi.azurewebsites.net/api/v1/Books/${idBook}`,
      failOnStatusCode: false
    })
  }
  
  export { deleteBook };