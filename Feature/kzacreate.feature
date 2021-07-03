Feature: KZA create new Board

  Background:
    Given I launch chrome browser
    And User enters Email
    Then click Log with in atlassian button
    And User enters Password

  Scenario: Create new Board
    When User Clicks Create new board link
    And User enters new board name
    And create board button
    And click cancel arrow
    Then add list page should be displayed


    Scenario: Add list to the board
      Given I click Test KZA board
      And  enter ToDOList title
      Then  Click ToDoaddlist button
      When I enter InProgress title
      And click Progressaddlist button
      And I enter Done title
      And click cancel button
      Then new lists should be displayed


      Scenario: Add cart to the list
        Given User click KZA board
        When  User enter card name
        And   Click add cart button
        And  Click cancel button for add another card
        Then New card we added should be displayed

