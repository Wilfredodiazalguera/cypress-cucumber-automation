Feature: Add product to the Cart

    As a user I want to add products to the cart

    Scenario: Add one product to the cart
        Given Im on inventory page
        When I add one item to the cart
        Then Items are added to the cart icon
        And Go to cart page from invetory page
        And Items are added to the cart page
