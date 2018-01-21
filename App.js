import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/redux/configureStore';
import NavigationApp from './app/NavigationApp'

// const store = configureStore();

const rnredux = () =>  {
  return (
    <Provider>
    {/* <Provider store={store}> */}
      <NavigationApp />
    </Provider>
  )
}

export default rnredux;