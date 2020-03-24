import React, { Component } from "react";
import * as actionCreators from "../../actions/actionCreators/index";
import { connect } from "react-redux";
import "./dropdownSelect.css";

class DropdownSelect extends Component {
  componentDidMount() {
    this.props.fetchCountryList();
  }

  handleChange = e => {
    this.props.selectedCountry(e.target.value);
    this.props.fetchCountryData(e.target.value);
  };

  render() {
    let countries = this.props.countriesList;
    let optionItems = Object.keys(countries).map(i => (
      <option key={i}>{countries[i].name}</option>
    ));

    let show = <div></div>;
    if (!this.props.isLoading) {
      show = (
        <div>
          <select onChange={e => this.handleChange(e)}>{optionItems}</select>
        </div>
      );
    }
    return <div>{show}</div>;
  }
}

const mapStateToProps = state => {
  return {
    countriesList: state.countryList,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountryList: () => dispatch(actionCreators.getCountryData()),
    selectedCountry: country =>
      dispatch(actionCreators.selectedCountry(country)),
    fetchCountryData: country =>
      dispatch(actionCreators.getSelectedCountryData(country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSelect);
