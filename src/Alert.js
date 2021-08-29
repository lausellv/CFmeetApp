import React from "react";

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontWeight = '700';
    this.fontSize = '1rem';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: this.fontWeight,
      fontSize: this.fontSize
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

export class offLineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }
}