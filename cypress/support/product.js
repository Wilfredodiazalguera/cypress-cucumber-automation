let swaglabs_logo = ".app_logo";
let products_title = ".title";
let add_to_cart = ".btn_inventory";
let remove_button = "#remove-sauce-labs-backpack";
let shopping_cart_icon = "a.shopping_cart_link span";
let item_price = ".inventory_item_price";
let item_description = ".inventory_item_desc";

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

Cypress.Commands.add("goToCartPageFromInvetoryPage", () => {
   cy.get(shopping_cart_icon).click();
});

Cypress.Commands.add("shoppingCartPageReflectsProductAdded", () => {
   cy.goToCartPageFromInvetoryPage();
   cy.get(remove_button).should("be.visible");
});

Cypress.Commands.add("verifyProductDetails", () => {
   cy.get(item_price).should("be.visible");
   cy.get(item_description).should("be.visible");
});
