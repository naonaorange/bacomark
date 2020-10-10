import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { ReaderReducer } from '../reader/reducers';
import { ProductsReducer } from '../products/reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      reader: ReaderReducer,
      products: ProductsReducer,
    }),
    applyMiddleware(thunk)
  );
}
