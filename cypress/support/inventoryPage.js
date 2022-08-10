const inventoryURL = `${Cypress.config().baseUrl}inventory.html`;
const shopping_cart_icon = "a.shopping_cart_link";
const swaglabs_logo = ".app_logo";
const products_title = ".title";
const add_to_cart_button = ".btn_inventory";
const remove_button = "#remove-sauce-labs-backpack";

Cypress.Commands.add("validateInventoryURL", () => {
   cy.get(swaglabs_logo).should("be.visible");
   cy.get(products_title).should("be.visible");
   cy.url().should("eq", inventoryURL);
});

Cypress.Commands.add("goToCartPage", () => {
   cy.get(shopping_cart_icon).click();
});

Cypress.Commands.add("shoppingCartIconReflectsProductAdded", () => {
   cy.get(shopping_cart_icon).contains("1");
});

Cypress.Commands.add("addProductToCart", numberElements => {
   cy.get(add_to_cart_button)
      .filter(`:lt(${numberElements})`)
      .click({ multiple: true });
});

Cypress.Commands.add("removeButtonIsVisible", () => {
   cy.get(remove_button).should("be.visible");
});
