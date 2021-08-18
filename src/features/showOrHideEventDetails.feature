Feature: Show or hide event details

Scenario: By default, event details are not displayed
Given event details are not displayed by default,
When user opens application
Then a list of events without details should be displayed

Scenario: User can find out more details about an event
Given events have loaded
When user clicks on an event
Then user should see complete event details

Scenario: User can hide event details
Given details of an events are displayed
When the user clicks on such event 
Then the user should no longer see full event details
