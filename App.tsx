import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/stack/Navigator';
import {createStore} from 'redux';
import reducer from './src/reducers/index';
import {Provider} from 'react-redux';
import {Tabs} from './src/stack/Tabs';

const App = () => {
  const initialState = {
    products: [],
    favs: [],
    cart: [],
  };

  const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
