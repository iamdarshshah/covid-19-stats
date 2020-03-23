import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import "./details.css";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      error: null,
      country: "All"
    };
  }

  fetchData = () => {
    // Where we're fetching data from
    fetch(`https://covid19.mathdro.id/api/`)
      .then(response => response.json())
      .then(data => {
        return this.setState({
          data: data,
          isLoading: false
        });
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    let showComponent = (
      <div className="Spinner">
        <Spinner animation="grow" />
      </div>
    );
    if (!this.state.isLoading) {
      showComponent = Object.keys(this.state.data)
        .slice(0, 3)
        .map(type => {
          console.log(this.state.data[type].detail);
          return (
            <Card className="Card">
              <Card.Body>
                <Card.Title>
                  {type.toUpperCase()}
                  {` (${this.state.country})`}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  For More:
                  <a
                    style={{ textDecoration: "none" }}
                    href={`${this.state.data[type].detail}`}
                  >
                    Click here
                  </a>
                </Card.Subtitle>
                <Card.Text>
                  <b>{this.state.data[type].value}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        });
    }
    return <div className="Wrap">{showComponent}</div>;
  }
}

export default Details;
