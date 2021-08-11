# CFmeetApp

<br>
<h1>PROJECT OVERVIEW</h1>
<br>
<p>To assemble a server-less, progressive web application (PWA) with React utilizing a test-driven development (TDD) procedure. The application utilizes the Google Calendar API to fetch events.</p> 
<hr />
<br>
<h1>TECH SPECS</h1>
<br >
<p>● The app must be a React application. ● The app must be built using the TDD technique. ● The app must use the Google Calendar API and OAuth2 authentication flow. Page 2 ● The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server. ● The app’s code must be hosted in a Git repository on GitHub. ● The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11. ● The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px. ● The app must pass Lighthouse’s PWA checklist. ● The app must work offline or in slow network conditions with the help of a service worker. ● Users may be able to install the app on desktop and add the app to their home screen on mobile. ● The app must be deployed on GitHub Pages. ● The API call must use React axios and async/await. ● The app must implement an alert system using an OOP approach to show information to the user. ● The app must make use of data visualization (recharts preferred). ● The app must be covered by tests with a coverage rate >= 90%. ● The app must be monitored using an online monitoring tool.</p>

<hr />
<h1>USER STORIES</h1>
<br>
<h2>Component 1: FILTER EVENTS BY CITY</h2>
<br>
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
<h2>Component 3: SPECIFY NUMBER OF EVENTS </h2>
<br>
<p><i>As a client, I would like to have the option to indicate the quantity of instances of events I would like to see. IOW decide if I want to go through list of X number of events. </i> </p>
<p>Situation 1: If the client hasn't indicated a number, a default number of max event instances is provided.</p> 
<p>Situation 2: A client can change the quantity of they would like to see.  </p>
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
