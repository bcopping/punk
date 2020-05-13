import { combineReducers } from "redux";
import cart from "./cart";
import beverages from "./beverages";

const appReducer = combineReducers({
  beverages,
  cart,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
