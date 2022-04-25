import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Im on login page", () => {
   cy.visitLoginPage();
});

When("I login", () => {
   cy.loginWith({ user: "standard_user", password: "secret_sauce" });
});

Then("The page url is on inventory", () => {
   cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
});
