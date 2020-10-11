import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { ProductsReducer } from '../products/reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['products'],
};

const rootReducers = combineReducers({
  products: ProductsReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

export default function createStore() {
  return reduxCreateStore(persistedReducers, applyMiddleware(thunk));
}
