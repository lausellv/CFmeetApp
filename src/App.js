import React, { Component } from "react";
import EventList from "./EventList";
import "./App.css";
import "./EventList";
import { getEvents, extractLocations } from "./api";

import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

export default class App extends Component {
  state = { events: [], locations: [], numberOfEvents: 32 };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
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
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}
