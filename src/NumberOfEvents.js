import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 15 // default number of events chosen by CF
  };

  handleInputChanged = event => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        ErrorText: "between 1 and 15 only",
        numberOfEvents: ""
      });
    } else if (value > 15) {
      return this.setState({
        ErrorText: "between 1 and 15 only",
        numberOfEvents: ""
      });
    } else {
      this.setState({
        numberOfEvents: value,
        ErrorText: ""
      });
      this.props.updateEvents("", value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Events Displayed</p>
        <input
          type="number"
          className="eventNum"
          placeholder="Enter number of events"
          value={this.state.numberOfEvents}
          onChange={event => this.handleInputChanged(event)}
        />
      </div>
    );
  }
}
