let user_name = "#user-name";
let password_selector = "#password";
let login_button = "#login-button";
let error_message_text = ".error-button";

Cypress.Commands.add("loginWith", ({ user, password }) => {
   cy.typeMessage(user_name, user);
   cy.typeMessage(password_selector, password);
   cy.get(login_button).click();
});

Cypress.Commands.add("visitLoginPage", () => {
   cy.visit("/");
});

Cypress.Commands.add("invalidCredentialsErrorIsShown", () => {
   cy.get(error_message_text).should("be.visible");
});
