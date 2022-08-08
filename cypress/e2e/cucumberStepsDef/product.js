import {
   Given,
   When,
   Then,
   And,
} from "@badeball/cypress-cucumber-preprocessor";

Given("Im on inventory page", () => {
   cy.visitLoginPage();
   cy.loginWith({ user: "standard_user", password: "secret_sauce" });
});

When("The inventory page loads", () => {
   cy.validateInventoryURL();
});

When("I add one item to the cart", () => {
   cy.addOneProductToCart();
});

And("Go to cart page from invetory page", () => {
   cy.goToCartPage();
});
