import React, { Component } from "react";
import EventList from "./EventList";
import "./App.css";

import CitySearch from "./CitySearch";

export default class App extends Component {
  state = { events: [], locations: [] };

  
  render() {
    return (
      <div className="App">
        <CitySearch/>
        <EventList />
      </div>
    );
  }
}
