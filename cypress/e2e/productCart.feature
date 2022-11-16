Feature: Add product to the Cart

    As a user I want to add products to the cart

    Background: Im on inventory page
        Given Im on inventory page

    Scenario: Accessibility test on inventory page
        When I add one item to the cart
        And Go to cart page from invetory page
        Then Checks the accessibility

    Scenario: Add one product to the cart
        When I add one item to the cart
        Then Items are added to the cart icon
        And Go to cart page from invetory page
        And Items are added to the cart page

    Scenario: Validate product details
        When I add one item to the cart
        And Go to cart page from invetory page
        Then I see the product details like price and description
