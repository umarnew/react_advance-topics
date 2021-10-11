import React, { Component } from "react";

export default class Lifecycle extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json)
      .then((data) => this.setState({ data: data }));
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
