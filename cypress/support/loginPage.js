const user_name_selector = "#user-name";
const password_selector = "#password";
const login_button = "#login-button";
const error_message_text = ".error-button";

Cypress.Commands.add("visitLoginPage", () => {
   cy.visit("/");
});

Cypress.Commands.add("loginWith", ({ user, password }) => {
   cy.typeMessage(user_name_selector, user);
   cy.typeMessage(password_selector, password);
   cy.get(login_button).click();
});

Cypress.Commands.add("invalidCredentialsErrorIsShown", () => {
   cy.get(error_message_text).should("be.visible");
});

Cypress.Commands.add("loginButtonisDisplayed", () => {
   cy.get(login_button).should("be.visible");
});
