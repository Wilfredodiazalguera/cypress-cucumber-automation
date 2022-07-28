import {
   Given,
   When,
   Then,
   And,
} from "@badeball/cypress-cucumber-preprocessor";

Given("Im on product page", () => {
   cy.visitLoginPage();
   cy.loginWith({ user: "standard_user", password: "secret_sauce" });
   cy.isOnProductsPage();
});

When("I add items to the cart", () => {
   cy.addOneProductToCart();
});

Then("Items are added to the cart icon", () => {
   cy.shoppingCartIconReflectsProductAdded();
});

And("Items are added to the cart page", () => {
   cy.shoppingCartPageReflectsProductAdded();
});
