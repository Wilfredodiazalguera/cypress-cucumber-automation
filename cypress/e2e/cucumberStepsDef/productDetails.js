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

And("Go to cart page from invetory page", () => {
   cy.goToCartPageFromInvetoryPage();
});

Then("I see the product details", () => {
   cy.verifyProductDetails();
});
