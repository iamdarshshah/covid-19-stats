import * as actionTypes from "../actions/actionTypes/index";

const initialState = {
  data: [],
  countryList: [],
  countryData: [],
  country: "All",
  isLoading: true,
  loadingCountryData: true,
  error: null
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_OVERALL_STATS_DATA:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };

    case actionTypes.GET_COUNTRY_LIST:
      return {
        ...state,
        countryList: action.payload.data,
        isLoading: false
      };

    case actionTypes.SELECTED_COUNTRY:
      return {
        ...state,
        country: action.payload.data,
        loadingCountryData: true
      };

    case actionTypes.GET_SELECTED_COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload.data,
        loadingCountryData: false
      };
    default:
      return state;
  }
};

export default Reducers;
