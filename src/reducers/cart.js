import * as actionTypes from "../constants/actionTypes";

const initState = {
  items: [],
  cartOpen: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const elementsIndex = state.items.findIndex(
        (element) => element.id === action.payload.id
      );

      if (elementsIndex !== -1) {
        let newArray = [...state.items];
        newArray[elementsIndex] = {
          ...newArray[elementsIndex],
          qty: newArray[elementsIndex].qty + 1,
        };
        return {
          ...state,
          items: newArray,
          cartOpen: true,
        };
      } else {
        action.payload.qty = 1;
        return {
          ...state,
          items: [...state.items, action.payload],
          cartOpen: true,
        };
      }
    }

    case actionTypes.DECREMENT_CART_ITEM: {
      const elementsIndex = state.items.findIndex(
        (element) => element.id === action.payload.id
      );

      let newArray = [...state.items];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        qty: newArray[elementsIndex].qty - 1,
      };
      return {
        ...state,
        items: newArray,
      };
    }
    case actionTypes.REMOVE_CART_ITEM: {
      const elementsIndex = state.items.findIndex(
        (element) => element.id === action.payload.id
      );
      let newArray = [...state.items];
      newArray.splice(elementsIndex, 1);
      return {
        ...state,
        items: newArray,
      };
    }
    case actionTypes.TOGGLE_CART_VISIBILITY: {
      if (action.payload === false) {
        return {
          ...state,

          cartOpen: action.payload,
        };
      } else {
        return {
          ...state,

          cartOpen: !state.cartOpen,
        };
      }
    }
    default:
      return state;
  }
};
