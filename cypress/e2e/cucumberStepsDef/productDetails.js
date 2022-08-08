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

<<<<<<<< HEAD:cypress/e2e/cucumberStepsDef/product.js
When("The inventory page loads", () => {
   cy.validateInventoryURL();
});

When("I add one item to the cart", () => {
   cy.addOneProductToCart();
});

========
>>>>>>>> main:cypress/e2e/cucumberStepsDef/productDetails.js
And("Go to cart page from invetory page", () => {
   cy.goToCartPage();
});
