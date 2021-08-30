import React, { Component } from "react";
import "./App.css";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { offLineAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";

export default class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15,
    selectedLocation: "all",
    offLineText: "",
    showWelcomeScreen: undefined
  };

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then(events => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    // Enable alert for the user when the app has no internet connection.
    if (!navigator.onLine) {
      this.setState({
        offLineText: "You are currently using the app offline. Events may be out of date."
      });
    } else {
      this.setState({
        offLineText: ""
      });
    }

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
      const locationEvents =
        location === "all" || !location
          ? events
          : events.filter(event => event.location === location);
      this.setState({
        selectedLocation: location,
        events: locationEvents.slice(0, numberOfEvents),
        numberOfEvents: numberOfEvents
      });
    });
  };

  updateCount = newCount => {
    const { selectedLocation } = this.state;
    this.updateEvents(selectedLocation, newCount);
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />;

    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <h1>MeetApp</h1>
        <h4>Choose your nearest city</h4>

        {/* Alert to notify the user when using the app offline. */}
        <offLineAlert text={this.state.offLineText} />

        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />

        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}
