import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { ReaderReducer } from '../reader/reducers';
import { ProductsReducer } from '../products/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      reader: ReaderReducer,
      products: ProductsReducer,
    }),
    composeWithDevTools()
  );
}
