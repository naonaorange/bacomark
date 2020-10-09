import { createStore, combineReducers } from 'redux';
import { readerReducer } from '../reader/reducer';

const rootReducer = combineReducers({
  reader: readerReducer,
});

const store = createStore(rootReducer);

export default store;
