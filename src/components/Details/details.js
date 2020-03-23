import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import * as actionCreators from "../../actions/actionCreators/index";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import "./details.css";

class Details extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    console.log(this.props.data);
    let showComponent = (
      <div className="Spinner">
        <Spinner animation="grow" />
      </div>
    );
    if (!this.props.isLoading) {
      showComponent = Object.keys(this.props.data)
        .slice(0, 3)
        .map(type => {
          return (
            <Card className="Card" key={type}>
              <Card.Body>
                <Card.Title>
                  {type.toUpperCase()}
                  {` (${this.props.country})`}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  For More:
                  <a
                    style={{ textDecoration: "none" }}
                    href={`${this.props.data[type].detail}`}
                  >
                    &nbsp;Click here
                  </a>
                </Card.Subtitle>
                <Card.Text>
                  <b>{this.props.data[type].value}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        });
    }
    return <div className="Wrap">{showComponent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    country: state.country
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actionCreators.getOverallStatsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
