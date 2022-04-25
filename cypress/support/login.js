//Login commands

Cypress.Commands.add("loginWith", ({ user, password }) => {
   cy.get("#user-name").clear().type(user);
   cy.get("#password").clear().type(password);
   cy.get("#login-button").click();
});

Cypress.Commands.add("visitLoginPage", () => {
   cy.visit("/");
});

Cypress.Commands.add("invalidCredentialsErrorIsShown", () => {
   cy.get(".error-button").should("be.visible");
});
