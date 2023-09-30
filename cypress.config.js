const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xj8agd',
  e2e: {
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      snapshotOnly: false,
      hideCredentials: true
    }
  },
});
