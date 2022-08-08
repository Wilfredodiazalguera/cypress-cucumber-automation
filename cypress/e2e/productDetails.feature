Feature: Product Details in Cart page

    As a user I want to see the product details when an item is added to the cart

    Background: Im on inventory page
        Given Im on inventory page

    Scenario: Accessibility test on inventory page
        When The inventory page loads
        Then Checks the accessibility

    Scenario: Validate product details
        When I add one item to the cart
        And Go to cart page from invetory page
        Then I see the product details like price and description
