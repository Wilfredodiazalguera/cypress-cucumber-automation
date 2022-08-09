const report = require("multiple-cucumber-html-reporter");
report.generate({
   jsonDir: "cypress/cucumber-json/", // ** Path of .json file **//
   reportPath: "./reports",
   metadata: {
      browser: {
         name: "Chrome",
         version: "Latest",
      },
      device: "Windows",
      platform: {
         name: "Windows",
         version: "2022",
      },
   },
});
