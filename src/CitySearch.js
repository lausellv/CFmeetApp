import React from "react";
// import Alert from "react-bootstrap/Alert";

export default class CitySearch extends React.Component {
  state = {
    locations: this.props.locations,
    query: "",
    suggestions: [],
    showSuggestions: false,
    infoText: ""
  };

  handleInputChanged = e => {
    const value = e.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter(location => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: "Cannot find location."
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        infoText: ""
      });
    }
  };

  handleItemClicked = suggestion => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false
    });

    this.props.updateEvents(suggestion, this.props.numberOfEvents);
  };

  render() {
    return (
      <div className="CitySearch">
        {/* <Alert text={this.state.infoText} /> */}
        <label>Select a City</label>
        <input
          type="text"
          className="city"
          value={this.state.query === "all" ? "All Cities" : this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: "none" }}>
          {this.state.suggestions.map(suggestion => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}
            </li>
          ))}

          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}
