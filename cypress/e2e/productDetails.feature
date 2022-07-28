Feature: Product Details

    As a user I want to see the product details when an item is added to the cart

    Scenario: Navigate and validate product details
        Given Im on inventory page
        When I add items to the cart
        And Go to cart page from invetory page
        Then I see the product details