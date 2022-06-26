Feature: Login tests

    Scenario: Accessibility test on Login
        Given Im on login page
        When The login page loads
        Then Axe checks the accessibility

    Scenario: Successful login
        Given Im on login page
        When I login with valid credentials
        Then The page url is on inventory page

    Scenario: Invalid login
        Given Im on login page
        When I login with invalid credentials
        Then Page show an error message