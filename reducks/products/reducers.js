import * as Action from './actions';
import { initialState } from '../store/initialState';

export const ProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case Action.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product] };
    default:
      return state;
  }
};
