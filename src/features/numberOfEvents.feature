Feature: Specify number of events displayed

Scenario: User has NOT indicated a number of events to display. Default number of events will be displayed.
Given user hasn't indicated a number of events, default number of event is provided
When user opens event list
Then event default number should be displayed.


Scenario: User can change the quantity of events to be displayed.
Given events have loaded
When user changes the number of events to be displayed
Then online the number of events specified by the user is shown.