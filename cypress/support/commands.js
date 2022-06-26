//General useful commands
Cypress.Commands.add("typeMessage", (selector, message) => {
   cy.get(selector).clear().type(message);
});

//Command top test Accessibility on WCAG2AA (This can be modified depending on requirements needed)
Cypress.Commands.add("checkAccessibility", (context = null) => {
   cy.injectAxe();
   cy.checkA11y(context, {
      runOnly: {
         type: "tag",
         values: ["wcag2aaa"],
      },
   });
});
