import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { ProductsReducer } from '../products/reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
    }),
    applyMiddleware(thunk)
  );
}
