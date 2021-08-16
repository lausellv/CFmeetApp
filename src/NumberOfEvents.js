import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32  // default number of events chosen by CF
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  

  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="eventNum"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      
      </div>
    )
  }
};

