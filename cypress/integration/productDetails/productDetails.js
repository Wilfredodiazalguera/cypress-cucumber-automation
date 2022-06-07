import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("Im on inventory page", () => {
   cy.visitLoginPage();
   cy.loginWith({ user: "standard_user", password: "secret_sauce" });
});

When("I add items to the cart", () => {
   cy.addOneProductToCart();
});

And("Go to cart page from invetory page", () => {
   cy.goToCartPageFromInvetoryPage();
});

Then("I see the product details", () => {
   cy.verifyProductDetails();
});
