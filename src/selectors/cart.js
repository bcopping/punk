import { createSelector } from "reselect";

const getTotals = (items) => {
  let total = 0;
  items.forEach((item) => {
    let itemTotal = item.qty * item.price;
    total = parseFloat(total) + parseFloat(itemTotal);
  });

  return total.toFixed(2);
};

const getCartState = ({ cart = {} }) => cart;

export const selectCartOriginal = createSelector(
  getCartState,
  ({ items = [] }) => items
);

export const cartTotal = createSelector([selectCartOriginal], (items) =>
  getTotals(items)
);
