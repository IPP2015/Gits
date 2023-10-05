const { defineConfig } = require("cypress");
module.exports = defineConfig({
  pageLoadTimeout: 220000,
  reporter: 'cypress-mochawesome-reporter',
  "video": true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
