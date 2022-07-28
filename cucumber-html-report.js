const report = require("multiple-cucumber-html-reporter");
report.generate({
   jsonDir: "./cucumber-json", // ** Path of .json file **//
   reportPath: "./reports",
   metadata: {
      browser: {
         name: "Electron 94",
         version: "Electron 94",
      },
      device: "Windows",
      platform: {
         name: "Wwindows",
         version: "latest",
      },
   },
});
