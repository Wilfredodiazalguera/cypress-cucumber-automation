const { defineConfig } = require("cypress");

const createEsbuildPlugin =
   require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
   require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
   chromeWebSecurity: false,
   video: false,
   e2e: {
      //Cucumber preprocessor set-up
      async setupNodeEvents(on, config) {
         const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
         });

         on("file:preprocessor", bundler);
         await addCucumberPreprocessorPlugin(on, config);
         return config;
      },

      specPattern: "cypress/e2e/**/*.feature",
      baseUrl: "https://www.saucedemo.com/",
   },
});
