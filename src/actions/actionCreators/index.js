import * as actionTypes from "../actionTypes/index";
import axios from "axios";

export function storeStatsData(data) {
  return {
    type: actionTypes.GET_OVERALL_STATS_DATA,
    payload: {
      data: data
    }
  };
}

export function getOverallStatsData() {
  return dispatch => {
    axios.get(`https://covid19.mathdro.id/api/`).then(response => {
      dispatch(storeStatsData(response.data));
    });
  };
}

export function storeCountryData(data) {
  return {
    type: actionTypes.GET_COUNTRY_LIST,
    payload: {
      data: data
    }
  };
}

export function getCountryData() {
  return dispatch => {
    axios.get(`https://covid19.mathdro.id/api/countries`).then(response => {
      dispatch(storeCountryData(response.data.countries));
    });
  };
}

export function selectedCountry(data) {
  return {
    type: actionTypes.SELECTED_COUNTRY,
    payload: {
      data
    }
  };
}

export function storeSelectedCountryData(data) {
  return {
    type: actionTypes.GET_SELECTED_COUNTRY_DATA,
    payload: {
      data
    }
  };
}

export function getSelectedCountryData(country) {
  return dispatch => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${country.toUpperCase()}`)
      .then(response => {
        dispatch(storeSelectedCountryData(response.data));
      });
  };
}
