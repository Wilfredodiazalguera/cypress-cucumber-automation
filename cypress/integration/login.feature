Feature: Login tests

    As a user I want to ensure that I can login successful

    Background: Im on login page
        Given Im on login page

    Scenario: Accessibility test on Login page (WCAG2AA)
        When The login page loads
        Then Checks the accessibility

    Scenario: Successful login
        When I login with valid credentials
        Then The page url is on inventory page

    Scenario: Invalid login
        When I login with invalid credentials
        Then Page show an error message