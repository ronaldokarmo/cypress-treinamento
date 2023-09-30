const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xj8agd',
  e2e: {
    baseUrl: 'https://serverest.dev',
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    env: {
      snapshotOnly: false,
      hideCredentials: true
    }
  },
});
