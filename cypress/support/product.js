let swaglabs_logo = ".app_logo";
let products_title = ".title";
let add_to_cart = ".btn_inventory";
let shopping_cart_icon = "a.shopping_cart_link span";
let remove_button = "#remove-sauce-labs-backpack";

Cypress.Commands.add("isOnProductsPage", () => {
   cy.get(swaglabs_logo).should("be.visible");
   cy.get(products_title).should("be.visible");
   cy.url().should("include", "/inventory");
});

Cypress.Commands.add("addOneProductToCart", () => {
   cy.get(add_to_cart).eq(0).click();
});

Cypress.Commands.add("shoppingCartIconReflectsProductAdded", () => {
   cy.get(shopping_cart_icon).contains("1");
});

Cypress.Commands.add("shoppingCartPageReflectsProductAdded", () => {
   cy.get(shopping_cart_icon).click();
   cy.get(remove_button).should("be.visible");
});
