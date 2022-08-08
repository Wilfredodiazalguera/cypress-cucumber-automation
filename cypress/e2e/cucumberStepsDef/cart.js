import { Then, And } from "@badeball/cypress-cucumber-preprocessor";

Then("I see the product details like price and description", () => {
   cy.verifyProductDetails();
});

Then("Items are added to the cart icon", () => {
   cy.cartIconSpanContainData(1);
});

And("Items are added to the cart page", () => {
   cy.removeButtonIsVisible();
   cy.cartItemBoxIsVisible();
});
