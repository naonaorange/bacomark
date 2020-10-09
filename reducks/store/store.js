import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { ReaderReducer } from '../reader/reducer';

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      reader: ReaderReducer,
    })
  );
}
