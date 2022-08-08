const shopping_cart_icon_span = "a.shopping_cart_link span";
const cart_item_box = ".cart_item";
const item_price = ".inventory_item_price";
const item_description = ".inventory_item_desc";

Cypress.Commands.add("cartItemBoxIsVisible", () => {
   cy.get(cart_item_box).should("be.visible");
});

Cypress.Commands.add("cartIconSpanContainData", itemsNumber => {
   cy.get(shopping_cart_icon_span).should("contain", itemsNumber);
});

Cypress.Commands.add("verifyProductDetails", () => {
   cy.get(item_price).should("be.visible");
   cy.get(item_description).should("be.visible");
});
