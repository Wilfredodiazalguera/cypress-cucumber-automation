Feature: Login
    Scenario: Successful login
        Given Im on login page
        When I login
        Then The page url is on inventory
