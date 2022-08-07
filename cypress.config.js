const { defineConfig } = require("cypress");

module.exports = defineConfig({
   chromeWebSecurity: false,
   videoCompression: false,
   retries: {
      openMode: 2,
   },
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

      setupNodeEvents(on, config) {
         return require("./cypress/plugins/index.js")(on, config);
      },

      specPattern: "cypress/e2e/**/*.feature",
      baseUrl: "https://www.saucedemo.com/",
   },
});
