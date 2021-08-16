import React, { Component } from "react";
import EventList from "./EventList";
import "./App.css";

import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

export default class App extends Component {
  state = { events: [], locations: [] };

  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents  />
      </div>
    );
  }
}
