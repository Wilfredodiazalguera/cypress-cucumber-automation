//General useful commands
Cypress.Commands.add("typeMessage", (selector, message) => {
   cy.get(selector).clear().type(message);
});
