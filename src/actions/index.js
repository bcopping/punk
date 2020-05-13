import {
  GET_BEERS,
  ADD_TO_CART,
  TOGGLE_CART_VISIBILITY,
  DECREMENT_CART_ITEM,
  REMOVE_CART_ITEM,
} from "../constants/actionTypes";

export const getBeers = (query) => ({
  type: GET_BEERS,
  payload: query,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const decrementCartItem = (payload) => ({
  type: DECREMENT_CART_ITEM,
  payload,
});

export const removeCartItem = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload,
});

export const toggleCartVis = (payload) => ({
  type: TOGGLE_CART_VISIBILITY,
  payload,
});
