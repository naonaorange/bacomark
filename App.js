import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './reducks/store';
import { AppScreen, ReaderScreen } from './screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={AppScreen} />
          <Stack.Screen name="Reader" component={ReaderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
