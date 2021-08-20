import React from "react";
import Event from "./Event";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class EventList extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <Row>
          <ul className="EventList">
            {events.map(event => (
              <Col md={8}>
              <li key={event.id}>
                <Event event={event} />
              </li>
              </Col>
            ))}
          </ul>
        
      </Row>
    );
  }
}
