import React, { Component } from "react";
import EventList from "./EventList";
import "./App.css";
import "./EventList";
import { getEvents, extractLocations } from "./api";

import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

export default class App extends Component {
  state = { events: [], locations: [], numberOfEvents: 15 };

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

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === 'all' && eventCount === 0 
        ? events
          : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };
  

  render() {
    return (
      <div className="App">
        <h1>MeetApp</h1>
           <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <EventList events={this.state.events} />
        
      </div>
    );
  }
}
