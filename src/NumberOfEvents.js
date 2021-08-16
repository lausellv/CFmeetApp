import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEvents(event.target.value);

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

export default NumberOfEvents