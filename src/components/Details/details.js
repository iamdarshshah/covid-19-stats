import React, { Component } from "react";

class Details extends Component {
  componentDidMount() {
    fetch("https://covid19.mathdro.id/api/").then(res => console.log(res));
  }
  render() {
    return <div>Something!</div>;
  }
}

export default Details;
