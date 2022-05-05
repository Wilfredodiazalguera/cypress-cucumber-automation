Feature: Add product to the cart

    Scenario: Add one product to the cart
        Given Im on product page
        When I add items to the cart
        Then Items are added to the cart icon
        And Items are added to the cart page
