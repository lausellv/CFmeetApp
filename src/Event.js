import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Event extends Component {
  state = {
    show: false
  };

  handleButton = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const event = this.props.event;
    return (
      <Card border="light" className="mb-4" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="event">Event</Card.Title>
          <Card.Text className="summary">{event.summary}</Card.Text>
          <Card.Text className="location"> {event.location}</Card.Text>
          <Card.Text className="date">{event.start.dateTime}</Card.Text>
          <Card.Text className="timeZone"> {event.start.timeZone}</Card.Text>
          {this.state.show === true && <p className="details">{event.description}</p>}
          {this.state.show === false && (
            <Button className="showMore" onClick={() => this.handleButton()}>
              Show more
            </Button>
          )}
          {this.state.show === true && (
            <Button className="showLess" onClick={() => this.handleButton()}>
              Show less
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}
export default Event;
