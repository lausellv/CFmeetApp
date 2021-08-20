import React from "react";
import Event from "./Event";
import Col from "react-bootstrap/Col";

export default class EventList extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event => (
          <Col className="mt-3" md={3} sm={6} xs={12}>
            <li key={event.id}>
              <Event event={event} />
            </li>
          </Col>
        ))}
      </ul>
    );
  }
}
