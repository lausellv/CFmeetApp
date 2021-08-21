import React, { Component } from "react";
import "./App.css";
import { getEvents, extractLocations } from "./api";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

export default class App extends Component {
  state = { events: [], locations: [], numberOfEvents: 4 };

  componentDidMount() {
    this.mounted = true;

    getEvents().then(events => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }



  updateEvents = (location, eventCount) => {
    if (eventCount && eventCount > 0 && eventCount < 16) {
      /*console.log(eventCount)*/
      this.setState({
        numberOfEvents: eventCount
      });
    }
    this.setState({
      selectedLocation: location
    });

    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, this.state.numberOfEvents) :
        events.filter((event) => event.location === location).slice(0, this.state.numberOfEvents);
      this.setState({
        events: locationEvents
      });
    });
  }


  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <h1>MeetApp</h1>
        <h4>Choose your nearest city</h4>

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />

        <EventList events={this.state.events} />
      </div>
    );
  }
}
