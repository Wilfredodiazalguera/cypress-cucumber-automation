![](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)
![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

# Cypress.io using cucumber BDD and GitHub Actions

---

> ### Project made from scratch to perform automated front-end testing using cucumber as an additional framework to use BDD

---

## Installation

> Use the package manager npm [nodejs](https://nodejs.org/en/) to install the framework and dependencies

```
npm i
```

## How to use it

```
npm run test        // Run test with cypress UI
npm run testcli     // Run test with cypress CLI
npm run testreport  // Run test with cypress CLI and reporter
```

## Reporter

### Reporter on local machine

```
npm run testreport  // Run test with cypress CLI and reporter
```

> After run the reporter command go to reports folder and open index.html file

### Reporter on Github actions

> After run finish go to artifacts and download the reports file, unzip the file and open index.html file

## Patter Design implemented (Cypress.io + Cucumber)

### Methods and functions

> Methods and selectors are on support folder and can be accesable by any file, there are one file for each page (The file should contains selectors and commands/methods)

> Commands.js file is a general file where you can add the general commands and selectors for all the project. (like base commands/methods)

### Logic cucumber implementation

> The implementation of logic is on integration/folder/file, file (js) where we call the commands/methods to implement on each feature file.

### Test files (Feature files)

> The feature file contains the Gherkin steps tests.

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the [MIT license](/LICENSE).

[![Cypress.io](https://img.shields.io/badge/Tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
