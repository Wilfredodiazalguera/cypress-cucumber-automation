import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Im on login page", () => {
   cy.visitLoginPage();
});

When("I login with valid credentials", () => {
   cy.loginWith({ user: "standard_user", password: "secret_sauce" });
});

When("I login with invalid credentials", () => {
   cy.loginWith({ user: "standard_user", password: "badpassword" });
   cy.loginWith({ user: "invalid_user", password: "secret_sauce" });
});

When("The login page loads", () => {
   cy.loginButtonisDisplayed();
});

Then("The page url is on inventory page", () => {
   cy.validateInventoryURL();
});

Then("Page show an error message", () => {
   cy.invalidCredentialsErrorIsShown();
});

Then("Checks the accessibility", () => {
   cy.checkAccessibility();
});
