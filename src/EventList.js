import React from "react";
import Event from "./Event";


export default class EventList extends React.Component {
  render() {
    const { events } = this.props;
    return (
      
          <ul className="EventList">
            {events.map(event => (
             
              <li key={event.id}>
                <Event event={event} />
              </li>
            
            ))}
          </ul>
        
      
    );
  }
}
