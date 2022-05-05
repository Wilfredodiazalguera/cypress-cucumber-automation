Feature: Login tests

    Scenario: Successful login
        Given Im on login page
        When I login with valid credentials
        Then The page url is on inventory page

    Scenario: Invalid login
        Given Im on login page
        When I login with invalid credentials
        Then Page show an error message