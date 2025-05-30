/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
const App = () => {
  return (
    <Provider store={store}>
      
    <PersistGate loading={null} persistor={persistor}>
    <RootNavigator />
    </PersistGate>
  </Provider>
  );
};

export default App;
