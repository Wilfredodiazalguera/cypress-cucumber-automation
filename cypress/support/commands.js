// General useful commands

Cypress.Commands.add("typeMessage", (selector, message) => {
   cy.get(selector).clear().type(message);
});

// Command to test Accessibility - check the Accessibility Standard available
// in Axe Api docs -- here using cat.* as default
Cypress.Commands.add("checkAccessibility", (context = null) => {
   cy.injectAxe();
   cy.checkA11y(context, {
      runOnly: {
         type: "tag",
         values: ["cat.*"],
      },
   });
});
