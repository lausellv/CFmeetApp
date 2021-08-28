import React, { Component } from "react";
import "./App.css";
import { getEvents, extractLocations } from "./api";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

export default class App extends Component {
  state = { events: [], locations: [], numberOfEvents: 15, selectedLocation: "all" };

  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;

    getEvents().then(events => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then(events => {
      const locationEvents = (location === 'all'  || !location) ? events : events.filter(event => event.location === location);
      this.setState({
        selectedLocation: location,
        events: locationEvents.slice(0, numberOfEvents),
        numberOfEvents: numberOfEvents,
      });
    });
  }

  updateCount = newCount => {
    const { selectedLocation } = this.state;
    this.updateEvents(selectedLocation, newCount);
  }

  render() {

    return (
      
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <h1>MeetApp</h1>
        <h4>Choose your nearest city</h4>

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />

        <EventList events={this.state.events} />
      </div>
    );
  }
}
