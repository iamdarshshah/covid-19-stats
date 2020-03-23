import * as actionTypes from "../actions/actionTypes/index";

const initialState = {
  data: [],
  countryList: [],
  country: "All",
  isLoading: true,
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

    case actionTypes.GET_COUNTRY_DATA:
      return {
        ...state,
        countryList: action.payload.data,
        isLoading: false
      };

    case actionTypes.SELECTED_COUNTRY:
      return {
        ...state,
        country: action.payload.data
      };
    default:
      return state;
  }
};

export default Reducers;
