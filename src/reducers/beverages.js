import * as actionTypes from "../constants/actionTypes";

const initState = {
  beers: [],
  beersPizza: [],
  beersSteak: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_BEERS: {
      return {
        ...state,
        beers: action.payload,
      };
    }
    case actionTypes.SET_BEERS_PIZZA: {
      return {
        ...state,
        beersPizza: action.payload,
      };
    }
    case actionTypes.SET_BEERS_STEAK: {
      return {
        ...state,
        beersSteak: action.payload,
      };
    }
    default:
      return state;
  }
};
