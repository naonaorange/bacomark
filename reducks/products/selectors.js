import { createSelector } from 'reselect';

const productsSelector = (state) => state.products;

export const getProductsList = createSelector(
  [productsSelector],
  (state) => state.productsList
);
