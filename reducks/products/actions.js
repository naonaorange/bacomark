export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product,
  };
};

export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';

export const clearProduct = () => {
  return {
    type: CLEAR_PRODUCT,
  };
};
