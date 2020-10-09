import React from 'react';
import { Provider } from 'react-redux';
import { AppScreen } from './screens';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
}
