import React, { Component } from "react";
import EventList from "./EventList";
import "./App.css";
import "./EventList"

import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";


export default class App extends Component {
  state = { events: [], locations: [], numberOfEvents: 32 };

  updateEvents = location => {
    getEvents().then(events => {
      const locationEvents =
        location === "all" ? events : events.filter(event => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}
