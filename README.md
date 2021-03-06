# CFmeetApp


# Goal

 To assemble a server-less, progressive web application (PWA) with React utilizing a test-driven development (TDD) procedure. The application utilizes the Google Calendar API to fetch events. 

# USER STORIES

<h2>Component 1: FILTER EVENTS BY CITY</h2>

<p><i>As a client, I might want to have the option to search events by city so I can see the rundown of events that happen around there.</i> </p>
<br>
<p>Situation 1: When client hasn't searched for a city, show upcoming events from all cities. Given client hasn't looked for any city, when the client opens the application, he should see a rundown of every single future event.</p>
<p>Situation 2: Client should see a list of suggestions when doing a city search. Given the principal page is open. When client begins composing in the city textbox Then the client should see a rundown of urban communities (ideas) that match what they've composed.</p>
<p>Situation 3: Client can select a city from the suggested list in the area or in the vicinity. When I client types in the name of a city, nearby cities should also come up as suggested locations.</p>
<br> 
<h2>Component 2: SHOW/HIDE AN EVENT'S DETAILS</h2>
<br> 
<p><i>As a client, I might want to have the option to show/conceal event specific information so I can see more/less data about an event at my will.</i> </p>
<br>
<p>Situation 1: Event details can de fully displayed of hidden. When a user clicks on an event other events info is hidden while the event the client is looking at is fully displayed.</p>
<p>Situation 2: Client can learn more about an event and its details by clicking on it and expanding the info.</p> 
<p>Situation 3: Clicking on an event allows the client to find out more details about it.</p>
<br>
<h2>Component 3: SPECIFY NUMBER OF EVENTS / ELSE DEFAULT OPTION DISPLAYED </h2>
<br>
<p><i>As a client, I would like to have the option to indicate the quantity of instances of events I would like to see. IOW decide if I want to go through list of X number of events. </i> </p>
<p>Situation 1: If the client hasn't indicated a number, a default number of max event instances is provided.</p> 
<p>Situation 2: A client can change the quantity of events they would like to see.  </p>
<br>
<h2>Component 4: USE THE APP WHEN OFFLINE </h2>
<br>
<p><i>As a client, I might want to have the option to utilize the application when disconnected so I can see the events I saw the last time I was on the connected or so I can have access to my latest search even if there is no connectivity. </i> </p>
<br>
<p>Situation 1: Client can use the application when disconnected or when he has no web connection. At this point the user can have access to cache data. </p>
<p>Situation 2: Show an error msg warning there is no connection it the client changes the settings (city, time range) when there is no internet connection.</p> 
<br>
<h2>Component 5: DATA VISUALIZATION </h2>
<br>
<p><i>As a client, I might want to have the option to see a diagram showing the coming events in every city with the goal that I know what events correspond to which city. </i> </p>
<br>
<p>Situation 1: Show a graph with the quantity of coming events in every city. Allow client to search for events in general. When client taps on a guide, show a diagram with the quantity of coming events in every city.</p>

# Stack, Dependencies, Environment, Hosting

### Stack
 - React
### Dependencies
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "atatus-spa": "^4.3.2",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "nprogress": "^0.2.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.5",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "recharts": "^2.1.2",
    "web-vitals": "^0.2.4",
    "workbox-background-sync": "^5.1.4",
    "workbox-broadcast-update": "^5.1.4",
    "workbox-cacheable-response": "^5.1.4",
    "workbox-core": "^5.1.4",
    "workbox-expiration": "^5.1.4",
    "workbox-google-analytics": "^5.1.4",
    "workbox-navigation-preload": "^5.1.4",
    "workbox-precaching": "^5.1.4",
    "workbox-range-requests": "^5.1.4",
    "workbox-routing": "^5.1.4",
    "workbox-strategies": "^5.1.4",
    "workbox-streams": "^5.1.4"

### devDependencies
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.3",
    "enzyme": "^3.11.0",
    "gh-pages": "^3.2.3",
    "jest-cucumber": "^3.0.1",
    "puppeteer": "^10.2.0"

### Environment
  **VS Code**  v1.61.2
    **Extensions:** 
     **ESLint: Ver v2.2.2:**
  - npm v7.24.1
  - node v14.15.4

### Hosting
 https://lausellv.github.io/CFmeetApp

# Project Status
This PWA(Progressive Web App) is complete!