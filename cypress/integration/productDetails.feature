Feature: Product Details

    Scenario: Navigate and validate product details
        Given Im on inventory page
        When I add items to the cart
        And Go to cart page from invetory page
        Then I see the product details