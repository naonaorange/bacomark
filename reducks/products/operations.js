import * as Action from './actions';

export const searchProduct = (barcode) => {
  const product = barcode;
  return Action.addProduct(product);
};
