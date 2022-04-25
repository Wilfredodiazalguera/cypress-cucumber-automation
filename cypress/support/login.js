//Login commands

Cypress.Commands.add('loginWith', ({ user, password }) => {
    cy.get("#user-name")
        .type(user)
    cy.get("#password")
        .type(password)
    cy.get("#login-button")
        .click()
})

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit("/")
})