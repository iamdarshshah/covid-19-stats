import React, { Component } from "react";
import * as actionCreators from "../../actions/actionCreators/index";
import { connect } from "react-redux";
import "./dropdownSelect.css";

class DropdownSelect extends Component {
  componentDidMount() {
    this.props.fetchCountryList();
  }

  handleChange = e => {
    console.log(e.target.value);
    this.props.selectedCountry(e.target.value);
  };

  render() {
    let countries = this.props.countriesList;
    let optionItems = Object.keys(countries).map(country => (
      <option key={country}>{country}</option>
    ));

    return (
      <div>
        <select onChange={e => this.handleChange(e)}>{optionItems}</select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countriesList: state.countryList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountryList: () => dispatch(actionCreators.getCountryData()),
    selectedCountry: country =>
      dispatch(actionCreators.selectedCountry(country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSelect);
