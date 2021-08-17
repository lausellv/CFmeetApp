import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 15  // default number of events chosen by CF
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        ErrorText: 'Please choose a number between 1 and 20',
        numberOfEvents: ''
      });
    } else if (value > 15) {
      return this.setState({
        ErrorText: 'Please choose a number between 1 and 20',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
        ErrorText: '',
      });
      this.props.updateEvents('', value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="eventNum"
          placeholder="Enter number of events"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      
      </div>
    )
  }
};



